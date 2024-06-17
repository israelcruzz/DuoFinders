import { ExistAd } from "../../http/err/exist-ad";
import { GameNotFound } from "../../http/err/game-not-found";
import { UserNotFound } from "../../http/err/user-not-found-error";
import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";
import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";
import { UserRepositoryInterface } from "../../repositories/user/user-repository-interface";

interface CreateAdUseCaseRequest {
  name: string;
  yearPlaying: number;
  weekDays: string;
  hoursStart: number;
  hoursEnd: number;
  discord: string;
  useVoiceChannel: boolean;
  gameId: string;
  userId: string;
}

export class CreateAdUseCase {
  constructor(
    private adRepositorie: AdRepositoryInterface,
    private gameRepositorie: GamesRepositoryInterface,
    private userRepositorie: UserRepositoryInterface
  ) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({
    name,
    yearPlaying,
    weekDays,
    hoursStart,
    hoursEnd,
    discord,
    useVoiceChannel,
    gameId,
    userId,
  }: CreateAdUseCaseRequest) {
    const userExist = await this.userRepositorie.findUserById(userId);
    const gameExist = await this.gameRepositorie.findGameById(gameId);

    if (userExist === null) {
      throw new UserNotFound();
    }

    if (gameExist === null) {
      throw new GameNotFound();
    }

    const existAd = await this.adRepositorie.findExistAdInGame(userId, gameId)

    if(existAd) {
      throw new ExistAd()
    }

    const createdAd = await this.adRepositorie.create({
      name,
      yearPlaying,
      weekDays,
      hoursStart,
      hoursEnd,
      discord,
      useVoiceChannel,
      gameId,
      userId,
    });

    return createdAd;
  }
}
