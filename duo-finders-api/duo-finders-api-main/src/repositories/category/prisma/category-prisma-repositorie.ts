import { prisma } from "../../../lib/prisma";
import { CategoryRepositoryInterface } from "../category-repository-interface";

class CategoryPrismaRepositorie implements CategoryRepositoryInterface {
  public async index(): Promise<ICategory[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }

  public async findCategoryById(categoryId: string): Promise<ICategory | null> {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId
      }
    })

    return category
  }
}

export default new CategoryPrismaRepositorie();
