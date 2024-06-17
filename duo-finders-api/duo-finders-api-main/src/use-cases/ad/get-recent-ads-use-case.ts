import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";

interface GetRecentAdsUseCaseRequest {
    date: Date
}

export class GetRecentAdsUseCase {
  constructor(private adRepositorie: AdRepositoryInterface) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ date }: GetRecentAdsUseCaseRequest) {
    const recentAds = await this.adRepositorie.findRecentsAds(date)

    return recentAds
  }
}
