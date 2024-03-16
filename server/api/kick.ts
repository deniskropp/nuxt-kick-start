import { defineEventHandler, type EventHandlerRequest, type H3Event } from 'h3'
import { useCohere, useKickTemplate, type KickTemplate } from '../../modules/kick-it/src'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    if (event.method === 'OPTIONS') {
        event.node.res.statusCode = 204;
        event.node.res.statusMessage = "No Content.";
        return 'OK';
    }

    const body = await readBody<KickTemplate>(event)

    return useCohere(useKickTemplate(body))
})
