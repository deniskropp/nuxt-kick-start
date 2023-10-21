import axios, { AxiosError } from 'axios'

import { type Message } from '../message'
//import { settings } from '../../context/Settings'


const api_base = 'https://kick.violass.club'

///////////////////////////////////////////////////////////////////////////////////

export interface KickError {
    type: 'error'

    what: string
    stack?: string
}

export interface KickChat {
    type: 'chat'

    messages: Message[]
}

export interface KickFiles {
    type: 'files'

    names: string[]
}

export interface KickMessage {
    type: 'message'

    id: number

    role: string
    content: string

    session?: string
    sequence?: number
}

export interface KickMessages {
    type: 'messages'

    messages: KickMessage[]
}

export type KickResponse = (
    KickError |
    KickChat |
    KickFiles |
    KickMessage |
    KickMessages
)

///////////////////////////////////////////////////////////////////////////////////

export async function kickIt<R = KickResponse>(url: string, type: string, data?: any): Promise<R | KickError> {
    try {
        let base = api_base//settings.info.api_base ?? api_base

        if (base === '')
            base = api_base

        const options = {
            url: `${base}${url}`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
            },
        }

        if (data != undefined) {
            options.method = 'post'

            Object.defineProperty(options.headers, 'Content-Type', {
                value: 'application/json',
                writable: true,
                enumerable: true,
                configurable: true,
            })

            Object.defineProperty(options, 'data', {
                value: JSON.stringify(data),
                writable: true,
                enumerable: true,
                configurable: true,
            })
        }

        const response = await axios.request(options)

        console.log(url, type, response)

        if (typeof response.data === 'string') {
            return {
                type: 'error',
                what: response.data
            }
        }

        return {
            type: type,
            ...response.data
        }
    }
    catch (e) {
        const error = e as AxiosError

        console.error(error)

        return {
            type: 'error',
            what: error.toString(),
            stack: error.stack
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////

export async function kickChat(messages: Message[]): Promise<KickChat | KickError> {
    const response = await kickIt<KickChat>('/ai', 'chat', { messages })

    //if (response.type !== 'chat')
    //    throw response

    return response
}

export async function kickFiles(): Promise<KickFiles | KickError> {
    const response = await kickIt<KickFiles>(`/files`, 'files')

    //if (response.type !== 'files')
    //    throw response

    return response
}

export async function kickMessage(id: number): Promise<KickMessage | KickError> {
    const response = await kickIt<KickMessage>(`/messages/${id}`, 'message')

    //if (response.type !== 'message')
    //    throw response

    return response
}

export async function kickMessages(): Promise<KickMessages | KickError> {
    const response = await kickIt<KickMessages>('/messages', 'messages')

    //if (response.type !== 'messages')
    //    throw response

    if (response.type === 'messages') {
        let session = 0
        let sequence = 0
        let prevRole = ''
        let prevSession = undefined

        for (const m of response.messages) {
            if ((!m.session && m.role.startsWith('system') && !prevRole.startsWith('system')) || m.session != prevSession) {
                session++
                sequence = 0
            }

            prevRole = m.role
            prevSession = m.session

            if (!m.session || m.session === 'none' || m.session === '')
                m.session = `s-${session.toString()}`

//            if (!m.sequence)
                m.sequence = sequence++
        }
    }

    return response
}

export async function kickSession(sid: string): Promise<KickMessages | KickError> {
    const response = await kickMessages()

    if (response.type === 'messages') {
        response.messages = response.messages.filter(m => m.session === sid)
    }

    return response
}
