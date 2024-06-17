import { describe, it, expect, beforeAll, afterAll } from "vitest";
import gamesInMemoryRepositorie from "../../../repositories/games/in-memory/games-in-memory-repositorie";
import { FindManyGamesUseCase } from "../find-many-games-use-case";

describe("Find Many Games Use Case", () => {
  beforeAll(() => {
    gamesInMemoryRepositorie.games.push({
      name: "game-test",
      description: "game-test",
      image: "url-false",
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
  });

  afterAll(() => {
    gamesInMemoryRepositorie.games = [];
  });

  it("should be able to listing games", async () => {
    const findManyGames = new FindManyGamesUseCase(gamesInMemoryRepositorie);

    const categories = await findManyGames.execute({ page: 1, query: "t" });

    expect(categories).toHaveLength(1);
  });

  it("should not be able to listing games", async () => {
    const findManyGames = new FindManyGamesUseCase(gamesInMemoryRepositorie);

    const categories = await findManyGames.execute({ page: 1, query: "o" });

    expect(categories).toHaveLength(0);
  });
});
