import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { CreateUserUseCase } from "../create-user-controller";
import userInMemoryRepositorie from "../../../repositories/user/in-memory/user-in-memory-repositorie";

describe("Create User Use Case", () => {
  beforeAll(() => {
    userInMemoryRepositorie.users.push({
      discord: "user-test",
      avatar: "user-test",
      banner: "user-test",
      name: "user-test",
    });
  });

  afterAll(() => {
    userInMemoryRepositorie.users = [];
  });

  it("should be able to create user", async () => {
    const createUser = new CreateUserUseCase(userInMemoryRepositorie);

    const user = await createUser.execute({
      name: "test-user",
      avatar: "test-avatar",
      banner: "banner-test",
      discord: "discord-userc",
    });

    expect(user.name).toEqual(expect.any(String));
  });

  it("should be able to find existing user", async () => {
    const createUser = new CreateUserUseCase(userInMemoryRepositorie);

    const user = await createUser.execute({
      name: "test-user",
      avatar: "test-avatar",
      banner: "banner-test",
      discord: "user-test",
    });

    expect(user.name).toEqual(expect.any(String));
  });
});
