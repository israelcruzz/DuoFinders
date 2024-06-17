import { IUser } from "@/@types/entities/user";
import NextAuth from "next-auth";
import { DiscordProfile } from "next-auth/providers/discord";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      avatar: string;
      discordProfile: DiscordProfile;
    };
    userApi: IUser;
    token: string;
  }
}
