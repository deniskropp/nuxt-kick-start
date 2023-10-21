import { KickMessage, kickIt, kickMessage } from "./kick"

export class KickStore {
    private map: Map<number, KickMessage>

    constructor() {
        this.map = new Map
    }

    async getMessage(ID: number): Promise<KickMessage> {
        let m = this.map.get(ID)

        if (m === undefined) {
            const response = await kickMessage(ID)

            if (response.type !== 'message')
                throw new Error(response.what)

            this.map.set(ID, response)

            m = response
        }

        return m!
    }

    async addMessage(text: string, role: string, session: string, sequence?: number): Promise<KickMessage> {
        const response = await kickIt<KickMessage>('/messages', 'message', {
            role: role,
            content: text,
            session: session,
            sequence: sequence ?? 0
        })

        if (response.type !== 'message')
            throw new Error(response.what)

        return response
    }
}
