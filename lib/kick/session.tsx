export class KickSession {
    private id: string

    constructor() {
        this.id = ''

        const chars = '-_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

        for (let i=0; i<5; i++)
            this.id += chars[Math.ceil(Math.random() * chars.length - 1)]
    }

    public getID(): string {
        return this.id
    }
}
