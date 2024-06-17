import { describe, it, expect, afterAll, beforeAll } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { CreateAdUseCase } from "../create-ad-use-case";
import gamesInMemoryRepositorie from "../../../repositories/games/in-memory/games-in-memory-repositorie";
import userInMemoryRepositorie from "../../../repositories/user/in-memory/user-in-memory-repositorie";
import { ExistAd } from "../../../http/err/exist-ad";

describe("Create Ad Use Case", () => {
  beforeAll(() => {
    userInMemoryRepositorie.users.push(
      {
        id: "user-test",
        name: "test",
        avatar: "test",
        banner: "test",
        discord: "test",
      },
      {
        id: "user-test-01",
        name: "test",
        avatar: "test",
        banner: "test",
        discord: "test",
      }
    );

    gamesInMemoryRepositorie.games.push(
      {
        id: "game-test",
        description: "test",
        image: "test",
        name: "test",
      },
      {
        id: "game-test-01",
        description: "test",
        image: "test",
        name: "test",
      }
    );

    adInMemoryRepositorie.ads.push({
      id: "ad-test",
      name: "user-test",
      discord: "user-test",
      hoursEnd: 1,
      hoursStart: 2,
      useVoiceChannel: true,
      weekDays: "user-test",
      yearPlaying: 4,
      createdAt: new Date(),
      gameId: "game-test",
      userId: "user-test",
    });
  });

  afterAll(() => {
    adInMemoryRepositorie.ads = [];
  });

  it("should be able to create ad", async () => {
    const createGame = new CreateAdUseCase(
      adInMemoryRepositorie,
      gamesInMemoryRepositorie,
      userInMemoryRepositorie
    );

    const ad = await createGame.execute({
      name: "test",
      discord: "test",
      gameId: "game-test-01",
      hoursEnd: 2,
      hoursStart: 2,
      userId: "user-test-01",
      useVoiceChannel: true,
      weekDays: "sun",
      yearPlaying: 2,
    });

    expect(ad.name).toEqual(expect.any(String));
  });

  it("should not be able to create ad", async () => {
    const createGame = new CreateAdUseCase(
      adInMemoryRepositorie,
      gamesInMemoryRepositorie,
      userInMemoryRepositorie
    );

    await expect(() =>
      createGame.execute({
        name: "user-test",
        discord: "user-test",
        hoursEnd: 1,
        hoursStart: 2,
        useVoiceChannel: true,
        weekDays: "user-test",
        yearPlaying: 4,
        gameId: "game-test",
        userId: "user-test",
      })
    ).rejects.toBeInstanceOf(ExistAd);
  });
});
