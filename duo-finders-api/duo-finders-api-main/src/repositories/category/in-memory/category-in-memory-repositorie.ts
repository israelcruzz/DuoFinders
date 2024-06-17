import { CategoryRepositoryInterface } from "../category-repository-interface";

class CategoryInMemoryRepositorie implements CategoryRepositoryInterface {
  public categories: ICategory[] = [];

  public async index(): Promise<ICategory[]> {
    const categories = this.categories;

    return categories;
  }

  public async findCategoryById(categoryId: string): Promise<ICategory | null> {
    const category = this.categories.find(
      (category) => category.id === categoryId
    );

    if (category === undefined) {
      return null;
    }

    return category;
  }
}

export default new CategoryInMemoryRepositorie();
