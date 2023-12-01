import { getItemText, type Item } from '../lib/item'
import type { Message } from '../lib/message'

import { kickIt } from '../lib/kick'
import { useInfo } from './info'

export function useChat(constants?: any) {
    const { page } = useContent()
    const { body } = unref(page)

    // Context
    const elements = body.children.filter((c: any) => c.tag !== 'chat' && c.tag !== 'test-chat')

    // Content
    const chats = body.children.filter((c: any) => c.tag === 'chat')

    // Constants
    const entries = Object.entries(constants).filter(e => e[1])

    /// Messages
    const messages: Message[] = [
        {
            role: 'system',
            content: `This is a template to generate markdown according to these rules:
- Context elements are given by "context:{tag}" serving as auxiliary information, not to be included in the response
- Constants are given by "user:{key}" serving as parameters
- Contents is given by "user" serving as the input data, asking for generated output data
`
        },
        ...elements.map((e: Item) => ({
            role: `context:${e.tag ?? ''}`,
            content: getItemText(e)
        })),
        ...entries.map(([key, value]) => ({
            role: `user:${key}`,
            content: value
        })),
        ...chats.map((c: Item, index: number) => ({
            role: `user`,
            content: getItemText(c)
        })),
    ]

    return {
        messages,
        generate
    }

    async function generate(messages: Message[], kick_api?: string) {
        const { data } = await useAsyncData('kick', () => {
            const info = useInfo()

            return kickIt(kick_api ?? '/ai', 'chat', {
                messages: [
                    { role: 'system', content: 'GENERATE MARKDOWN USING TEMPLATE WITH FOLLOWING INFORMATION' },
                    ...info.map(i => ({
                        role: i._content._id,
                        content: `${i.title}\n${i.text}`
                    })),
                    ...messages,
                ]
            })
        })

        if (!data.value)
            throw new Error('no data')

        return (
            data.value.type === 'error' ? data.value.what :
                data.value.type === 'chat' ? data.value.messages[data.value.messages.length - 1].content :
                    data.value.type
        )
    }
}
