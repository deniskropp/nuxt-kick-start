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

    if (item.tag === 'h1')
        str.push('# ')

    if (item.tag === 'h2')
        str.push('## ')

    if (item.tag === 'h3')
        str.push('### ')

    if (item.children)
        item.children.forEach(c => str.push(getText(c)))

    return str.join('\n')
}

export async function useChat(user?: string) {
    const { page } = useContent()
    const { body } = page.value

    console.log('useChat(body)', body)

    const parts = body.children.map((c: any) => ({
        role: `element:${c.tag ?? ''}`,
        content: getText(c)
    }))

    const chats = body.children.filter((c: any) => c.tag === 'chat')

    console.log('useChat(chats)', chats)

    const messages = [
        {
            role: user ? 'user' : 'system',
            //content: user ?? 'Your task is to generate markdown content as per chat element.'
            content: user ?? 'Your task is to continue the markdown content in plain text format'
        },
        ...Object.entries(chats[0].props).map((p: any) => ({
            role: `${p[0]}`,
            content: p[1]
        })),
        ...parts
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

    return ''
}
