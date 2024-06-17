import { describe, it, expect, beforeAll, afterAll } from "vitest";
import gamesInMemoryRepositorie from "../../../repositories/games/in-memory/games-in-memory-repositorie";
import { FindGamePerCategoryUseCase } from "../find-game-per-category-use-case";
import categoryInMemoryRepositorie from "../../../repositories/category/in-memory/category-in-memory-repositorie";
import { CategoryDoesNotExists } from "../../../http/err/category-does-not-exists-error";

describe("Find Many Most Games Use Case", () => {
  beforeAll(() => {
    gamesInMemoryRepositorie.games.push({
      name: "game-test",
      description: "game-test",
      image: "url-false",
      categoryId: "test-repo",
      ads: [
        {
          name: "test",
          discord: "test",
          hoursEnd: 1,
          hoursStart: 2,
          useVoiceChannel: true,
          weekDays: "test",
          yearPlaying: 2,
          gameId: "user-test",
          userId: "user-test",
        },
        {
          name: "test2",
          discord: "test2",
          hoursEnd: 2,
          hoursStart: 3,
          useVoiceChannel: true,
          weekDays: "test",
          yearPlaying: 6,
          gameId: "user-test",
          userId: "user-test",
        },
      ],
    });

    categoryInMemoryRepositorie.categories.push({
      id: "test-repo",
      name: "category-test",
    });
  });

  afterAll(() => {
    gamesInMemoryRepositorie.games = [];
    categoryInMemoryRepositorie.categories = [];
  });

  it("should be able to listing games for one category", async () => {
    const findGamePerCategory = new FindGamePerCategoryUseCase(
      gamesInMemoryRepositorie,
      categoryInMemoryRepositorie
    );

    const games = await findGamePerCategory.execute({
      categoryId: "test-repo",
    });

    expect(games).toHaveLength(1);
  });

  it("should not be able to listing games for one category", async () => {
    const findGamePerCategory = new FindGamePerCategoryUseCase(
      gamesInMemoryRepositorie,
      categoryInMemoryRepositorie
    );

    await expect(() =>
      findGamePerCategory.execute({ categoryId: "not-exist-category-test" })
    ).rejects.toBeInstanceOf(CategoryDoesNotExists);
  });
});
