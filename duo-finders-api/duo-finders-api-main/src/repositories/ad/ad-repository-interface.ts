export interface AdRepositoryInterface {
  create({
    name,
    yearPlaying,
    weekDays,
    hoursStart,
    hoursEnd,
    discord,
    useVoiceChannel,
    gameId,
    userId,
  }: IAd): Promise<IAd>;
  findManyGameAds(gameId: string, page: number): Promise<IAd[]>;
  findRecentsAds(date: Date): Promise<IAd[]>;
  showDiscordAd(adId: string): Promise<string | null | undefined>;
  findManyUserAds(userId: string): Promise<IAd[]>;
  deleteUserAd(adId: string): Promise<void>;
  findAdById(adId: string): Promise<IAd | null>;
  findExistAdInGame(userId: string, gameId: string): Promise<IAd | null>
}
