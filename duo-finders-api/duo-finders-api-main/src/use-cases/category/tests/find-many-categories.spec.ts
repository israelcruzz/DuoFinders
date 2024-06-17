import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { FindManyCategoriesUseCase } from "../find-many-categories-use-case";
import categoryInMemoryRepositorie from "../../../repositories/category/in-memory/category-in-memory-repositorie";

describe("Category Use Case", () => {
    beforeAll(() => {
    categoryInMemoryRepositorie.categories.push({
      id: "categorie-1",
      name: "test-categorie",
    });
  });

  afterAll(() => {
    categoryInMemoryRepositorie.categories = [];
  });

  it("should be able to listing categories", async () => {
    const findManyCategories = new FindManyCategoriesUseCase(
      categoryInMemoryRepositorie
    );

    const categories = await findManyCategories.execute();

    expect(categories).toHaveLength(1);
  });
});
