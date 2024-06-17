import { prisma } from "../../../lib/prisma";
import { UserRepositoryInterface } from "../user-repository-interface";

class UserPrismaRepositorie implements UserRepositoryInterface {
  public async createUser({
    name,
    avatar,
    banner,
    discord,
  }: IUser): Promise<IUser> {
    const user = await prisma.user.create({
      data: {
        name,
        avatar,
        banner,
        discord,
      },
    });

    return user;
  }

  public async findUserById(userId: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  public async findUserByDiscordId(discordId: string): Promise<IUser | null> {
    const user = await prisma.user.findFirst({
      where: {
        discord: discordId
      }
    })

    return user
  }
}

export default new UserPrismaRepositorie();
