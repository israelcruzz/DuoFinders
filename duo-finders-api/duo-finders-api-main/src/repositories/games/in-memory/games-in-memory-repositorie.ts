import { GamesRepositoryInterface } from "../games-repository-interface";

class GamesInMemoryRepositorie implements GamesRepositoryInterface {
  public games: IGame[] = [];

  public async findManyGames(
    query: string | undefined,
    page: number
  ): Promise<IGame[]> {
    let games;

    if (query) {
      games = this.games.filter((game) =>
        game.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );

      const gamesSliced = games.slice((page - 1) * 20, page * 20);

      return gamesSliced;
    }

    games = this.games.slice((page - 1) * 20, page * 20);

    return games;
  }

  public async findManyGamesPerCategory(categoryId: string): Promise<IGame[]> {
    const gamesFilteredPerCategory = this.games.filter(
      (game) => game.categoryId === categoryId
    );

    return gamesFilteredPerCategory;
  }

  public async findManyMostGamesAds(): Promise<IGame[]> {
    const gamesWithCount = this.games.map((game) => {
      return {
        ...game,
        adCount: game.ads?.length,
      };
    });

    const sortedGames = gamesWithCount.sort(
      (a, b) => (b.adCount || 1) - (a.adCount || 2)
    );

    const maxAdsCount = sortedGames[0].adCount;

    const gamesWithMostAds = sortedGames.filter(
      (game) => game.adCount === maxAdsCount
    );

    return gamesWithMostAds;
  }

  public async findGameById(gameId: string): Promise<IGame | null> {
    const game = this.games.find((game) => game.id === gameId);

    if (game === undefined) {
      return null;
    }

    return game;
  }
}

export default new GamesInMemoryRepositorie();
