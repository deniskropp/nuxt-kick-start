import { kickIt } from '../lib/kick'

export async function useChat(user?: string) {
    const v = await useAsyncData('kick', () => kickIt('/ai', 'chat', {
        messages: [
            {
                role: 'json',
                content: JSON.stringify(useContent().page.value.body.children)
            },
            {
                role: user ? 'user' : 'system',
                content: user ?? 'Your task is to continue the markdown content in plain text format'
            }
        ]
    }))

    if (v.data.value) {
        const d = v.data.value

        return d.type === 'error' ? d.what :
            d.type === 'chat' ? d.messages[d.messages.length - 1].content : d.type
    }

    return ''
}
