export interface CategoryRepositoryInterface {
  index(): Promise<ICategory[]>;
  findCategoryById(categoryId: string): Promise<ICategory | null>
}
