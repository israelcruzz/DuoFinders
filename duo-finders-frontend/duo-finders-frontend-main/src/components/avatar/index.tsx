import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";
import { getServerSession } from "next-auth";
import Image from "next/image";

export async function Avatar() {
  const session = await getServerSession(nextAuthOptions);

  const discordImage = `https://cdn.discordapp.com/avatars/${session?.user.discordProfile.id}/${session?.userApi.avatar}.png`;

  console.log(discordImage);

  return (
    <Image
      src={session ? discordImage : "/logo.svg"}
      width={56}
      height={56}
      alt="logo duofinders"
      className="rounded-full"
    />
  );
}
