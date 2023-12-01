import axios from 'axios'

import type { Message } from '../lib/message'
import { kickIt } from '../lib/kick'

interface Item {
    type: string
    tag?: string
    value?: string
    children?: Item[]
}

export function getText(item: Item): string {
    var str: string[] = []

    if (item.type === 'text')
        str.push(item.value ?? 'ERROR')

    //    if (item.tag === 'h1')
    //        str.push('# ')

    //    if (item.tag === 'h2')
    //        str.push('## ')

    //    if (item.tag === 'h3')
    //        str.push('### ')

    //    if (item.tag === 'h4')
    //        str.push('#### ')

    if (item.tag === 'li')
        str.push('- ')

    if (item.children)
        item.children.forEach(c => str.push(getText(c)))

    return str.join('\n').replaceAll('- \n', '- ')
}

export function useChat(constants?: any) {
    const { page } = useContent()
    const { body } = page.value

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
            content: getText(e)
        })),
        ...entries.map(([key, value]) => ({
            role: `user:${key}`,
            content: value
        })),
        ...chats.map((c: Item, index: number) => ({
            role: `user`,
            content: getText(c)
        })),
    ]

    return {
        messages,
        generate
    }

    async function generate(messages: Message[], kick_api?: string) {
        const infomsgs = await getInfos()

        const ret = await useAsyncData('kick', () => kickIt(kick_api ?? '/ai', 'chat', {
            messages: [
                { role: 'system', content: 'GENERATE MARKDOWN USING TEMPLATE WITH FOLLOWING INFORMATION' },
                ...infomsgs,
                ...messages,
            ]
        }))
        const data = ret.data.value

        if (!data)
            throw new Error('no data')

        return (
            data.type === 'error' ? data.what :
                data.type === 'chat' ? data.messages[data.messages.length - 1].content :
                    data.type
        )
    }
}

export async function getInfos(): Promise<Message[]> {
    const ret = await queryContent().where({ layout: { $eq: 'info' } }).find()

    return ret.map(i => ({
        role: i._id,
        content: `${i.title}\n${i.body ? getText(i.body) : ''}`
    }))
}
