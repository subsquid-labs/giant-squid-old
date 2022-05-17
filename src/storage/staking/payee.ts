import { decodeId, encodeId } from '../../common/helpers'
import config from '../../config'
import { Payee, PayeeTypeRaw } from '../../types/custom/stakingData'
import { StakingPayeeStorage } from '../../types/generated/storage'
import * as v9111 from '../../types/generated/v9111'
import { StorageContext } from '../../types/generated/support'

async function getStorageData(
    ctx: StorageContext,
    account: Uint8Array
): Promise<{ payee: string; account: Uint8Array | null } | undefined> {
    const storage = new StakingPayeeStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        const { __kind, value } = await storage.getAsV1020(account)
        return {
            payee: __kind,
            account: value,
        }
    } else if (storage.isV9111) {
        const data = await storage.getAsV9111(account)
        return {
            payee: data.__kind,
            account: (data as v9111.RewardDestination_Account).value,
        }
    }

    return undefined
}

const storageCache: {
    hash?: string
    values: Map<string, Payee>
} = {
    values: new Map(),
}

export async function getPayee(ctx: StorageContext, account: string): Promise<Payee | undefined> {
    if (storageCache.hash !== ctx.block.hash) {
        storageCache.hash = ctx.block.hash
        storageCache.values.clear()
    }

    const key = account
    let value = storageCache.values.get(key)

    if (!value) {
        const u8 = decodeId(account, config.prefix)
        if (!u8) return undefined

        const data = await getStorageData(ctx, u8)
        if (!data) return undefined

        value = {
            payee: data.payee as PayeeTypeRaw,
            account: data.account ? encodeId(data.account, config.prefix) : undefined,
        }

        storageCache.values.set(key, value)
    }

    return value
}