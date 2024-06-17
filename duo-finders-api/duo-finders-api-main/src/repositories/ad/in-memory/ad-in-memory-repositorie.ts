import dayjs from "dayjs";
import { AdRepositoryInterface } from "../ad-repository-interface";

class AdInMemoryRepository implements AdRepositoryInterface {
  public ads: IAd[] = [];

  public async create({
    name,
    yearPlaying,
    weekDays,
    hoursStart,
    hoursEnd,
    discord,
    useVoiceChannel,
    gameId,
    userId,
  }: IAd): Promise<IAd> {
    const newAd = {
      name,
      yearPlaying,
      weekDays,
      hoursStart,
      hoursEnd,
      discord,
      useVoiceChannel,
      gameId,
      userId,
    };

    this.ads.push(newAd);

    return newAd;
  }

  public async deleteUserAd(adId: string): Promise<void> {
    const filteredUserAd = this.ads.findIndex((ad) => ad.id === adId);

    if (filteredUserAd !== -1) {
      this.ads.splice(filteredUserAd, 1);
    }
  }

  public async findManyGameAds(gameId: string, page: number): Promise<IAd[]> {
    const filteredGames = this.ads.filter((ad) => ad.gameId === gameId);

    const slicedGames = filteredGames.slice((page - 1) * 20, page * 20);

    return slicedGames;
  }

  public async findManyUserAds(userId: string): Promise<IAd[]> {
    const userAds = this.ads.filter((ad) => ad.userId === userId);

    return userAds;
  }

  public async findRecentsAds(date: Date): Promise<IAd[]> {
    const startDate = dayjs(date).startOf("date");
    const endDate = dayjs(date).endOf("date");

    const recentAds = this.ads.filter((ad) => {
      const createdAt = dayjs(ad.createdAt);

      const isSameAdDate =
        createdAt.isAfter(startDate) && createdAt.isBefore(endDate);

      return isSameAdDate;
    });

    return recentAds;
  }

  public async showDiscordAd(adId: string): Promise<string | null | undefined> {
    const ad = this.ads.find((ad) => ad.id === adId);

    const discordName = ad?.discord;

    return discordName;
  }

  public async findAdById(adId: string): Promise<IAd | null> {
    const ad = this.ads.find((ad) => ad.id === adId);

    if (ad === undefined) {
      return null;
    }

    return ad;
  }

  public async findExistAdInGame(
    userId: string,
    gameId: string
  ): Promise<IAd | null> {
    const ad = this.ads.find(
      (ad) => ad.userId === userId && ad.gameId === gameId
    );

    if (ad === undefined) {
      return null;
    }

    return ad;
  }
}

export default new AdInMemoryRepository();
