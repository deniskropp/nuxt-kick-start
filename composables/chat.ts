import axios from 'axios'

import { useKickTemplate } from '../modules/kick-it/src'

import type { Message } from '../lib/message'

import { useInfo } from './info'


export async function useChat(constants?: any) {
    const { page } = useContent()
    const { body } = unref(page)

    // Context
    const elements = body.children.filter((c: any) => c.tag !== 'chat' && c.tag !== 'test-chat')

    // Content
    const chats = body.children.filter((c: any) => c.tag === 'chat')

    // Constants
    const entries = Object.entries<string>(constants).filter(e => e[1])

    const info = await useInfo()

    const ti = useKickTemplate({
        constants: [
            ...info.map(i => ({ key: i.title, value: i.text })),
        ],
    })

    const templ = useKickTemplate({
        parent: ti,
        constants: [
            ...entries.map(([key, value]) => ({ key, value })),
        ],
        context: elements,
        contents: chats
    })

    /// Messages
    const messages = templ.make()

    return {
        messages,
        generate
    }

    async function generate(messages: Message[], kick_api?: string) {
        const { data } = await useAsyncData('kick', async () => {
            const options = {
                url: '/api/kick',
                method: 'POST',
                data: templ
            }

            const result = await axios.request(options)

            console.log('---\n', result.data)

            return result.data
        })

        if (!data.value)
            throw new Error('no data')

        return (
            data.value
        )
    }
}
