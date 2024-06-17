import { AdNotFound } from "../../http/err/ad-not-found";
import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";

interface DeleteUserAdUseCaseRequest {
  adId: string;
}

export class DeleteUserAdUseCase {
  constructor(private adRepositorie: AdRepositoryInterface) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ adId }: DeleteUserAdUseCaseRequest) {
    const existAd = await this.adRepositorie.findAdById(adId);

    if (existAd === null) {
      throw new AdNotFound();
    }

    await this.adRepositorie.deleteUserAd(adId);

    return {
      message: "Success!",
    };
  }
}
