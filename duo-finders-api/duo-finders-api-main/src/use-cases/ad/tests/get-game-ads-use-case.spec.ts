import { describe, it, expect, beforeAll, afterAll } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { GetGameAdsUseCase } from "../get-game-ads-use-case";
import gamesInMemoryRepositorie from "../../../repositories/games/in-memory/games-in-memory-repositorie";
import { GameNotFound } from "../../../http/err/game-not-found";

describe("Get Game Ads Use Case", () => {
  beforeAll(() => {
    adInMemoryRepositorie.ads.push({
      name: "user-test",
      discord: "user-test",
      gameId: "user-test",
      hoursEnd: 1,
      hoursStart: 2,
      userId: "user-test",
      useVoiceChannel: true,
      weekDays: "user-test",
      yearPlaying: 4,
      createdAt: new Date(2024, 3, 14, 8, 0, 0),
    });

    gamesInMemoryRepositorie.games.push({
      id: "user-test",
      description: "user-test",
      image: "test",
      name: "test",
    });
  });

  afterAll(() => {
    adInMemoryRepositorie.ads = [];
  });

  it("should be able to listing ads game", async () => {
    const recentAds = new GetGameAdsUseCase(
      adInMemoryRepositorie,
      gamesInMemoryRepositorie
    );

    const userAds = await recentAds.execute({ gameId: "user-test", page: 1 });

    expect(userAds).toHaveLength(1);
  });

  it("should not be able to listing ads game", async () => {
    const recentAds = new GetGameAdsUseCase(
      adInMemoryRepositorie,
      gamesInMemoryRepositorie
    );

    await expect(() =>
      recentAds.execute({ gameId: "not-user-test", page: 1 })
    ).rejects.toBeInstanceOf(GameNotFound);
  });
});
