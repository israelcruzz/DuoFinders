import { AdNotFound } from "../../http/err/ad-not-found";
import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";

interface GetDiscordAdUseCaseRequest {
  adId: string;
}

export class GetDiscordAdUseCase {
  constructor(private adRepositorie: AdRepositoryInterface) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ adId }: GetDiscordAdUseCaseRequest) {
    const existAd = await this.adRepositorie.findAdById(adId);

    if (existAd === null) {
      throw new AdNotFound();
    }

    const discordName = await this.adRepositorie.showDiscordAd(adId);

    return discordName;
  }
}
