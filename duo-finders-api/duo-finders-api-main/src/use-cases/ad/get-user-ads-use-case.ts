import { UserNotFound } from "../../http/err/user-not-found-error";
import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";
import { UserRepositoryInterface } from "../../repositories/user/user-repository-interface";

interface GetUserAdsUseCaseRequest {
  userId: string;
}

export class GetUserAdsUseCase {
  constructor(
    private adRepositorie: AdRepositoryInterface,
    private userRepositorie: UserRepositoryInterface
  ) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ userId }: GetUserAdsUseCaseRequest) {
    const userExist = await this.userRepositorie.findUserById(userId)

    if(userExist === null){
      throw new UserNotFound();
    }

    const userAds = await this.adRepositorie.findManyUserAds(userId);

    return userAds;
  }
}
