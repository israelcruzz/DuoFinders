import { CategoryRepositoryInterface } from "../../repositories/category/category-repository-interface";
import { GamesRepositoryInterface } from "../../repositories/games/games-repository-interface";
import { CategoryDoesNotExists } from "../../http/err/category-does-not-exists-error";

interface FindGamePerCategoryUseCaseRequest {
  categoryId: string;
}

export class FindGamePerCategoryUseCase {
  constructor(
    private gameRepositorie: GamesRepositoryInterface,
    private categoryRepositorie: CategoryRepositoryInterface
  ) {
    this.gameRepositorie = gameRepositorie;
    this.categoryRepositorie = categoryRepositorie;
  }

  public async execute({ categoryId }: FindGamePerCategoryUseCaseRequest) {
    const existCategory = await this.categoryRepositorie.findCategoryById(
      categoryId
    );

    if (existCategory === null) {
      throw new CategoryDoesNotExists();
    }

    const gameRepository = this.gameRepositorie;

    const games = await gameRepository.findManyGamesPerCategory(categoryId);

    return games;
  }
}
