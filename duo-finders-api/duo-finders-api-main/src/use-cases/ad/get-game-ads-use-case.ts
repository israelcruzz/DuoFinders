import { GameNotFound } from "../../http/err/game-not-found";
import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";
import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";

interface GetGameAdsUseCaseRequest {
  gameId: string;
  page: number;
}

export class GetGameAdsUseCase {
  constructor(
    private adRepositorie: AdRepositoryInterface,
    private gameRepositorie: GamesRepositoryInterface
  ) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ gameId, page }: GetGameAdsUseCaseRequest) {
    const gameExist = await this.gameRepositorie.findGameById(gameId)

    if(gameExist === null) {
      throw new GameNotFound()
    }

    const gameAds = await this.adRepositorie.findManyGameAds(gameId, page);

    return gameAds;
  }
}
