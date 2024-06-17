import { describe, it, expect, beforeAll, afterAll } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { GetDiscordAdUseCase } from "../get-discord-ad-use-case";
import { AdNotFound } from "../../../http/err/ad-not-found";

describe("Get Discord Ad Use Case", () => {
  beforeAll(() => {
    adInMemoryRepositorie.ads.push({
      id: "ad-test",
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
  });

  afterAll(() => {
    adInMemoryRepositorie.ads = [];
  });

  it("should be able to listing discord ad", async () => {
    const getDiscordAd = new GetDiscordAdUseCase(adInMemoryRepositorie);

    const discordName = await getDiscordAd.execute({ adId: "ad-test" });

    expect(discordName).toEqual(expect.any(String));
  });

  it("should not be able to listing discord ad", async () => {
    const getDiscordAd = new GetDiscordAdUseCase(adInMemoryRepositorie);

    await expect(() =>
      getDiscordAd.execute({ adId: "not-exist-test" })
    ).rejects.toBeInstanceOf(AdNotFound);
  });
});
