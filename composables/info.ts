import type { ParsedContent, QueryBuilder, QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

import { getItemText } from '../lib/item'


export interface Info {
    title: string
    text: string
    _content: ParsedContent
}

export function queryInfo(params?: QueryBuilderParams): QueryBuilder<ParsedContent> {
    return (params ?
        queryContent(params) :
        queryContent()).where({ layout: { $eq: 'info' } })
}

export async function useInfo(query: QueryBuilder<ParsedContent> = queryInfo()): Info[] {
    const { data } = await useAsyncData('infos', async (ctx): Promise<Info[]> => {
        const contents = await query.find()

        return contents.map(content => ({
            title: content.title ?? '<untitled>',
            text: content.body ? getItemText(content.body) : '<undefined>',
            _content: content,
        }))
    })

    return unref(data) ?? []
}
