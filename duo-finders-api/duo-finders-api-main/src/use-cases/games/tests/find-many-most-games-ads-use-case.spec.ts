import { describe, it, expect, beforeAll, afterAll } from "vitest";
import gamesInMemoryRepositorie from "../../../repositories/games/in-memory/games-in-memory-repositorie";
import { FindManyMostGamesUseCase } from '../find-many-most-games-ads-use-case'

describe("Find Many Most Games Use Case", () => {
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

  it("should be able to listing most games", async () => {
    const findManyGames = new FindManyMostGamesUseCase(
        gamesInMemoryRepositorie
    );

    const mostGames = await findManyGames.execute();

    expect(mostGames).toHaveLength(1);
  });
});
