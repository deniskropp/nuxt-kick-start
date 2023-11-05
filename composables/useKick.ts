import type { Message } from '../lib/message'
import { kickIt } from '../lib/kick'

export async function useKick(messages: Message[]) {
    const ret = await useAsyncData('kick', () => kickIt('/ai', 'chat', { messages }))

    if (ret.data.value) {
        const data = ret.data.value

        return (
            data.type === 'error' ? data.what :
                data.type === 'chat' ? data.messages[data.messages.length - 1].content :
                    data.type
        )
    }

    return JSON.stringify(ret)
}
