import { describe, it, expect, beforeAll, afterAll } from "vitest";
import adInMemoryRepositorie from "../../../repositories/ad/in-memory/ad-in-memory-repositorie";
import { DeleteUserAdUseCase } from "../delete-user-ad-use-case";
import { AdNotFound } from "../../../http/err/ad-not-found";

describe("Delete User Ad Use Case", () => {
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

  it("should be able to delete ad", async () => {
    const deleteAd = new DeleteUserAdUseCase(adInMemoryRepositorie);

    const response = await deleteAd.execute({ adId: "ad-test" });

    expect(response).toEqual(expect.any(Object));
  });

  it("should not be able to delete ad", async () => {
    const deleteAd = new DeleteUserAdUseCase(adInMemoryRepositorie);

    await expect(() =>
      deleteAd.execute({ adId: "not-ad-test" })
    ).rejects.toBeInstanceOf(AdNotFound);
  });
});
