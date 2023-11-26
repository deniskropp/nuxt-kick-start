import axios from 'axios'

import type { Message } from '../lib/message'
import { kickIt } from '../lib/kick'

interface Item {
    type: string
    tag?: string
    value?: string
    children?: Item[]
}

function getText(item: Item): string {
    var str: string[] = []

    if (item.type === 'text')
        str.push(item.value ?? 'ERROR')

    //    if (item.tag === 'h1')
    //        str.push('# ')

    //    if (item.tag === 'h2')
    //        str.push('## ')

    //    if (item.tag === 'h3')
    //        str.push('### ')

    if (item.children)
        item.children.forEach(c => str.push(getText(c)))

    return str.join('\n')//.replaceAll('# \n', '# ')
}

export async function useChat(constants?: any) {
    const { page } = useContent()
    const { body } = page.value

    // Context
    const elements = body.children.filter((c: any) => c.tag !== 'chat' && c.tag !== 'test-chat')

    // Content
    const chats = body.children.filter((c: any) => c.tag === 'chat')

    const messages: Message[] = [
        {
            role: 'system',
            content:
                `This is a template for markdown content.

Generate a response according to these rules:
- Constants are given by "user:#key"
- Content is given by "user:[#index]"
- Context is given by "element:#tag"
`
        },
        ...elements.map((e: Item) => ({
            role: `element:${e.tag ?? ''}`,
            content: getText(e)
        })),
        ...Object.entries(constants).map(([key, value]) => ({
            role: `user:${key}`,
            content: value
        })),
        ...chats.map((c: Item, index: number) => ({
            role: `user:[${index}]`,
            content: getText(c)
        })),
    ]

    return {
        messages,
        generate
    }

    async function generate(messages: Message[], kick_api?: string) {
        const ret = await useAsyncData('kick', () => kickIt(kick_api ?? '/ai', 'chat', { messages }))

        if (ret.data.value) {
            const data = ret.data.value

            return (
                data.type === 'error' ? data.what :
                    data.type === 'chat' ? data.messages[data.messages.length - 1].content :
                        data.type
            )
        }

        return JSON.stringify(ret)



        const options = {
            method: 'POST',
            url: 'https://openai80.p.rapidapi.com/completions',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'acee344339mshfa967de0b6a29d8p148e75jsn9a5790c07991',
                'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
            },
            data: {
                model: 'text-davinci-003',
                prompt: messagesToPrompt(messages),
                max_tokens: 7,
                temperature: 0,
                top_p: 1,
                n: 1,
                stream: false,
                logprobs: null,
                stop: '\n'
            }
        };

        try {
            const response = await axios.request(options);

            console.log(response.data);

            return response.data
        } catch (error) {
            console.error(error);
            throw error
        }
    }
}



function messagesToPrompt(messages: Message[]) {
    return messages.map(m => `
⫻${m.role}⫽
${m.content}
`).join('\n\n\n')
}
