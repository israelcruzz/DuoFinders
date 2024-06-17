import { prisma } from "../../../lib/prisma";
import { GamesRepositoryInterface } from "../games-repository-interface";

class GamesPrismaRepositorie implements GamesRepositoryInterface {
  public async findManyGamesPerCategory(categoryId: string): Promise<IGame[]> {
    const games = await prisma.game.findMany({
      where: {
        categoryId,
      },
      include: {
        ads: true,
        category: true,
      },
    });

    return games;
  }

  public async findManyGames(query: string, page: number): Promise<IGame[]> {
    const games = await prisma.game.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
        ads: true,
        category: true,
      },
      skip: (page - 1) * 20,
      take: 20,
    });

    return games.map((game) => {
      return {
        id: game.id,
        name: game.name,
        image: game.image,
        description: game.description,
        categoryId: game.categoryId,
        countAds: game._count.ads,
        ads: game.ads,
      };
    });
  }

  public async findManyMostGamesAds(): Promise<IGame[]> {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        ads: {
          _count: "desc",
        },
      },
    });

    return games.map((game) => {
      let categoryName = game.category.name;
      let categoryId = game.category.id;

      return {
        id: game.id,
        name: game.name,
        image: game.image,
        description: game.description,
        countAds: game._count.ads,
        category: {
          id: categoryId,
          name: categoryName,
        },
      };
    });
  }

  public async findGameById(gameId: string): Promise<IGame | null> {
    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return game;
  }
}

export default new GamesPrismaRepositorie();
