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

    return str.join('\n').replaceAll('# \n', '# ')
}

export async function useChat(user?: string) {
    const { page } = useContent()
    const { body } = page.value

    const children = body.children.filter(c => c.tag !== 'chat')

    const parts = children.map((c: any) => ({
        role: `element:${c.tag ?? ''}`,
        content: getText(c)
    }))

    const chats = body.children.filter((c: any) => c.tag === 'chat')

    const content = getText(chats[0])

    const messages = [
        {
            role: user ? 'user' : 'system',
            //content: user ?? 'Your task is to generate markdown content as per chat element.'
            content: user ?? 'Following user input in markdown format'
        },
        ...Object.entries(chats[0].props).map((p: any) => ({
            role: `${p[0]}`,
            content: p[1]
        })),
        {
            role: 'user',
            content
        },
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
