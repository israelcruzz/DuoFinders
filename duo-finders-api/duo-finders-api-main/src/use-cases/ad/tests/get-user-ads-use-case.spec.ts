import { describe, it, expect, beforeAll, afterAll } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { GetUserAdsUseCase } from "../get-user-ads-use-case";
import userInMemoryRepositorie from "../../../repositories/user/in-memory/user-in-memory-repositorie";
import { UserNotFound } from "../../../http/err/user-not-found-error";

describe("Get User Ads Use Case", () => {
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
    });

    userInMemoryRepositorie.users.push({
      id: "user-test",
      avatar: "test",
      banner: "test",
      discord: "test",
      name: "test",
    });
  });

  afterAll(() => {
    adInMemoryRepositorie.ads = [];
  });

  it("should be able to listing user ads", async () => {
    const findManyUserAds = new GetUserAdsUseCase(
      adInMemoryRepositorie,
      userInMemoryRepositorie
    );

    const userAds = await findManyUserAds.execute({ userId: "user-test" });

    expect(userAds).toHaveLength(1);
  });

  it("should not be able to listing user ads", async () => {
    const findManyUserAds = new GetUserAdsUseCase(
      adInMemoryRepositorie,
      userInMemoryRepositorie
    );

    await expect(() =>
      findManyUserAds.execute({ userId: "fake-user-test" })
    ).rejects.toBeInstanceOf(UserNotFound);
  });
});
