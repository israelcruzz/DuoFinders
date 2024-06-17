interface IAd {
    id?: string
    name: string
    yearPlaying: number
    discord: string
    weekDays: string
    hoursStart: number
    hoursEnd: number
    useVoiceChannel: boolean
    createdAt?: Date
    userId: string
    gameId: string
}