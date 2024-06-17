import { CategoryRepositoryInterface } from "../../repositories/category/category-repository-interface";

export class FindManyCategoriesUseCase {
  constructor(private categoryRepositorie: CategoryRepositoryInterface) {
    this.categoryRepositorie = categoryRepositorie;
  }

  public async execute(){
    const categoriesRepository = this.categoryRepositorie

    const categories = await categoriesRepository.index()

    return categories
  }
}
