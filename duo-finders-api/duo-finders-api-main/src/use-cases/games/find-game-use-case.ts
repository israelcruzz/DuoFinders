import { GameNotFound } from "../../http/err/game-not-found";
import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";

interface FindGameUseCaseRequest {
  gameId: string;
}

export class FindGameUseCase {
  constructor(private gameRepositorie: GamesRepositoryInterface) {}

  public async execute({ gameId }: FindGameUseCaseRequest) {
    const gameExist = await this.gameRepositorie.findGameById(gameId);

    if (gameExist === null) {
      throw new GameNotFound();
    }

    return gameExist;
  }
}
