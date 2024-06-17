import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { GetRecentAdsUseCase } from "../get-recent-ads-use-case";

describe("Get Recent Ads Use Case", () => {
  beforeAll(() => {
    vi.useFakeTimers()

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
      createdAt: new Date(2024, 3, 14, 8, 0, 0)
    });
  });

  afterAll(() => {
    vi.useRealTimers()

    adInMemoryRepositorie.ads = [];
  });

  it("should be able to listing recent ads", async () => {
    vi.setSystemTime(new Date(2024, 3, 14, 8, 0, 0))

    const recentAds = new GetRecentAdsUseCase(adInMemoryRepositorie);

    const userAds = await recentAds.execute({ date: new Date() });

    expect(userAds).toHaveLength(1);
  });

  it("should not be able to listing recent ads", async () => {
    vi.setSystemTime(new Date(2025, 3, 14, 8, 0, 0))

    const recentAds = new GetRecentAdsUseCase(adInMemoryRepositorie);

    const userAds = await recentAds.execute({ date: new Date() });

    expect(userAds).toHaveLength(0);
  });
});
