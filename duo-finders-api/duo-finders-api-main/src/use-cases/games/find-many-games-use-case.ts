import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";

interface FindManyGamesUseCaseRequest {
  query: string | undefined;
  page: number;
}

export class FindManyGamesUseCase {
  constructor(private gameRepositorie: GamesRepositoryInterface) {
    this.gameRepositorie = gameRepositorie;
  }

  public async execute({ query, page }: FindManyGamesUseCaseRequest) {
    const games = await this.gameRepositorie.findManyGames(query, page);

    return games;
  }
}
