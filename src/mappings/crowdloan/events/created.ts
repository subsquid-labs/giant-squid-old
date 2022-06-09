import { UnknownVersionError } from '../../../common/errors'
import { crowdloanManager } from '../../../managers'
import storage from '../../../storage'
import { CrowdloanCreatedEvent } from '../../../types/generated/events'
import { EventContext, EventHandlerContext } from '../../types/contexts'

interface EventData {
    index: number
}

function getEventData(ctx: EventContext): EventData {
    const event = new CrowdloanCreatedEvent(ctx)

    if (event.isV9110) {
        return {
            index: event.asV9110,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCreated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    const fundInfo = await storage.crowdloan.getFunds(ctx, data.index)
    if (!fundInfo) return

    await crowdloanManager.create(ctx, {
        paraId: data.index,
        ...fundInfo,
    })
}
