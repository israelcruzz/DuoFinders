import dayjs from "dayjs";
import { prisma } from "../../../lib/prisma";
import { AdRepositoryInterface } from "../ad-repository-interface";

class AdPrismaRepositorie implements AdRepositoryInterface {
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
    const ad = await prisma.ad.create({
      data: {
        name,
        yearPlaying,
        weekDays,
        hoursStart,
        hoursEnd,
        discord,
        useVoiceChannel,
        gameId,
        userId,
      },
    });

    return ad;
  }

  public async findManyGameAds(gameId: string, page: number): Promise<IAd[]> {
    const games = await prisma.ad.findMany({
      where: {
        gameId,
      },
      skip: (page - 1) * 20,
      take: 20,
    });

    return games;
  }

  public async findManyUserAds(userId: string): Promise<IAd[]> {
    const userAds = await prisma.ad.findMany({
      where: {
        userId,
      },
    });

    return userAds;
  }

  public async findRecentsAds(date: Date): Promise<IAd[]> {
    const startDate = dayjs(date).startOf("date");
    const endDate = dayjs(date).endOf("date");

    const recentAds = await prisma.ad.findMany({
      where: {
        createdAt: {
          gte: startDate.toDate(),
          lte: endDate.toDate(),
        },
      },
      include: {
        game: {
          select: {
            id: true,
            name: true,
            image: true,
            description: true,
            categoryId: true,
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return recentAds;
  }

  public async showDiscordAd(adId: string): Promise<string | null | undefined> {
    const discordName = await prisma.ad.findUnique({
      where: {
        id: adId,
      },
      select: {
        discord: true,
      },
    });

    return discordName?.discord;
  }

  public async deleteUserAd(adId: string): Promise<void> {
    await prisma.ad.delete({
      where: {
        id: adId,
      },
    });
  }

  public async findAdById(adId: string): Promise<IAd | null> {
    const ad = prisma.ad.findUnique({
      where: {
        id: adId,
      },
    });

    return ad;
  }

  public async findExistAdInGame(
    userId: string,
    gameId: string
  ): Promise<IAd | null> {
    const ad = await prisma.ad.findFirst({
      where: {
        gameId,
        userId,
      },
    });

    return ad;
  }
}

export default new AdPrismaRepositorie();
