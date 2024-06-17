import { afterAll, beforeAll, describe, expect, it } from "vitest";
import gamesInMemoryRepositorie from "../../../repositories/games/in-memory/games-in-memory-repositorie";
import { FindGameUseCase } from "../find-game-use-case";
import { GameNotFound } from "../../../http/err/game-not-found";

describe("Find Game Use Case", () => {
  beforeAll(() => {
    gamesInMemoryRepositorie.games.push({
      id: "game-id-test",
      name: "game-test",
      description: "game-test",
      image: "url-false",
    });
  });

  afterAll(() => {
    gamesInMemoryRepositorie.games = [];
  });

  it("should be able show game", async () => {
    const showGameRepositorie = new FindGameUseCase(gamesInMemoryRepositorie);

    const game = await showGameRepositorie.execute({ gameId: "game-id-test" });

    expect(game?.id).toEqual(expect.any(String));
  });

  it("should not be able show game", async () => {
    const showGameRepositorie = new FindGameUseCase(gamesInMemoryRepositorie);

    await expect(() =>
      showGameRepositorie.execute({ gameId: "fake-id" })
    ).rejects.toBeInstanceOf(GameNotFound);
  });
});
