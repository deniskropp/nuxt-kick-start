import { kickIt } from '../lib/kick'

export async function useKick() {
    const 

    return {
        generate
    }


    const { page } = useContent()
    const { body } = page.value

    const elements = body.children.filter((c: any) => c.tag !== 'chat')
    const chats = body.children.filter((c: any) => c.tag === 'chat')


    function ask()
    const messages = [
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
        ...Object.entries(constants).map(([key,value]) => ({
            role: `user:${key}`,
            content: value
        })),
        ...chats.map((c: Item, index: number) => ({
            role: `user:[${index}]`,
            content: getText(c)
        })),
        ...elements.map((e: Item) => ({
            role: `element:${e.tag ?? ''}`,
            content: getText(e)
        }))
    ]

    console.log('useChat(messages)', messages)

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
