import { UserRepositoryInterface } from "../user-repository-interface";

class UserInMemoryRepositorie implements UserRepositoryInterface {
  public users: IUser[] = [];

  public async createUser({
    name,
    avatar,
    banner,
    discord,
  }: IUser): Promise<IUser> {
    const createUser = {
      name,
      avatar,
      banner,
      discord,
    };

    this.users.push(createUser);

    return createUser;
  }

  public async findUserById(userId: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.id === userId);

    if (user === undefined) {
      return null;
    }

    return user;
  }

  public async findUserByDiscordId(discordId: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.discord === discordId);

    if (user === undefined) {
      return null;
    }

    return user;
  }
}

export default new UserInMemoryRepositorie();
