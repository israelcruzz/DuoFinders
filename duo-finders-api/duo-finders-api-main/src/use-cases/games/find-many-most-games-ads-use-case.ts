import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";

export class FindManyMostGamesUseCase {
  constructor(private gameRepositorie: GamesRepositoryInterface) {
    this.gameRepositorie = gameRepositorie;
  }

  public async execute() {
    const gamesRepository = this.gameRepositorie;

    const games = await gamesRepository.findManyMostGamesAds();

    return games;
  }
}
