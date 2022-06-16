import { Account, Staker, StakingRole } from '../../model'
import { CommonHandlerContext } from '../types/contexts'
import { createPrevStorageContext } from './actions'
import { In } from 'typeorm'
import { getCollatorsData, getNominatorsData } from './stakers'
import { DefaultCollatorCommission } from './consts'

export async function getOrCreateAccount(ctx: CommonHandlerContext, id: string): Promise<Account> {
    let account = await ctx.store.get(Account, id)
    if (!account) {
        account = new Account({
            id,
            lastUpdateBlock: ctx.block.height - 1,
        })
        await ctx.store.insert(account)
    }

    return account
}

export async function getOrCreateAccounts(ctx: CommonHandlerContext, ids: string[]): Promise<Account[]> {
    const query = await ctx.store.findByIds(Account, ids)

    const accountsMap: Map<string, Account> = new Map()
    for (const q of query) accountsMap.set(q.id, q)

    const newAccounts: Set<Account> = new Set()
    for (const id of ids) {
        if (accountsMap.has(id)) continue

        const account = new Account({
            id,
            lastUpdateBlock: ctx.block.height - 1,
        })
        newAccounts.add(account)
    }

    if (newAccounts.size > 0) await ctx.store.save(newAccounts)

    return [...accountsMap.values(), ...newAccounts]
}

export async function getOrCreateStaker(ctx: CommonHandlerContext, id: string): Promise<Staker | undefined> {
    let staker = await ctx.store.get<Staker>(Staker, {
        where: { stashId: id },
        relations: ['stash'],
    })
    if (!staker) {
        const prevCtx = createPrevStorageContext(ctx)

        const collatorData = (await getCollatorsData(prevCtx, [id]))?.[0]
        if (collatorData != null) {
            staker = await createStaker(ctx, {
                stashId: id,
                activeBond: collatorData.bond,
                role: StakingRole.Collator,
            })
        }

        const nominatorData = (await getNominatorsData(prevCtx, [id]))?.[0]
        if (nominatorData != null) {
            staker = await createStaker(ctx, {
                stashId: id,
                activeBond: nominatorData.bond,
                role: StakingRole.Nominator,
            })
        }

        if (collatorData == null && nominatorData == null) return undefined
    }

    return staker
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function getOrCreateStakers(ctx: CommonHandlerContext, ids: string[]): Promise<Staker[] | undefined> {
    const query = await ctx.store.find<Staker>(Staker, {
        where: { stashId: In(ids) },
        relations: ['stash'],
    })

    const stakersMap: Map<string, Staker> = new Map()
    for (const q of query) stakersMap.set(q.stashId, q)

    const missingIds = ids.filter((id) => !stakersMap.has(id))

    // const newStakers: Set<Staker> = new Set()
    if (missingIds.length === 0) return [...stakersMap.values()]
    const prevCtx = createPrevStorageContext(ctx)

    const collatorsData = await getCollatorsData(prevCtx, missingIds)

    // if (!collatorsData && !nominatorsData) return [...stakersMap.values()]

    const newStakers: Staker[] = []

    if (collatorsData) {
        for (const collatorData of collatorsData) {
            if (!collatorData) continue
            const stashId = collatorData.id

            const staker = await createStaker(ctx, {
                stashId,
                activeBond: collatorData.bond,
                role: StakingRole.Collator,
                commission: DefaultCollatorCommission,
            })
            newStakers.push(staker)
        }
    }

    const notCollatorIds = missingIds.filter((id, i) => collatorsData?.[i] != null)
    const nominatorsData = await getNominatorsData(prevCtx, notCollatorIds)

    if (nominatorsData) {
        for (const nominatorData of nominatorsData) {
            if (!nominatorData) continue
            const stashId = nominatorData.id

            const staker = await createStaker(ctx, {
                stashId,
                activeBond: nominatorData.bond,
                role: StakingRole.Nominator,
            })
            newStakers.push(staker)
        }
    }

    return [...stakersMap.values(), ...newStakers]
}

interface StakerData {
    stashId: string
    activeBond?: bigint
    role?: StakingRole
    commission?: number
}

export async function createStaker(ctx: CommonHandlerContext, data: StakerData) {
    const stash = await getOrCreateAccount(ctx, data.stashId)

    const staker = new Staker({
        id: data.stashId,
        stash,
        role: data.role || StakingRole.Idle,
        activeBond: data.activeBond || 0n,
        totalReward: 0n,
        commission: data.commission || DefaultCollatorCommission,
    })
    await ctx.store.save(staker)

    return staker
}
