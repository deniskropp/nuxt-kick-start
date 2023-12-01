export interface Item {
    type: string
    tag?: string
    value?: string
    children?: Item[]
}

export function getItemText(item: Item): string {
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
        item.children.forEach(c => str.push(getItemText(c)))

    return str.join('\n').replaceAll('- \n', '- ')
}
