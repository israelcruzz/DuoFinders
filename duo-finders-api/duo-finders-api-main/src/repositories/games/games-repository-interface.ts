export interface GamesRepositoryInterface {
  findManyGames(query: string | undefined, page: number): Promise<IGame[]>;
  findManyMostGamesAds(): Promise<IGame[]>;
  findManyGamesPerCategory(categoryId: string): Promise<IGame[]>;
  findGameById(gameId: string): Promise<IGame | null>;
}
