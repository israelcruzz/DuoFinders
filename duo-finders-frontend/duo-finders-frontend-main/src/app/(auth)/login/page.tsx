import Image from "next/image";
import { Metadata } from "next";
import { LoginButton } from "@/components/login-button";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};

async function fakeFetchDate() {
  return await new Promise((resolve) => setTimeout(resolve, 2000));
}

export default async function Login() {
  await fakeFetchDate();

  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="w-full h-full xl:h-[100vh] flex flex-col p-12 xl:flex-row gap-6">
      <section className="w-full h-full flex items-center justify-center">
        <Image
          src="/login-image.svg"
          width={500}
          height={500}
          alt="login image"
          quality={100}
        />
      </section>
      <section className="w-full h-full flex flex-col xl:justify-center xl:p-8">
        <span className="font-medium text-sm text-white mb-8">DuoFinders</span>

        <h1 className="font-bold text-white text-xl mb-6">
          Connect to our platform
        </h1>

        <p className="text-[#AAAAAA] text-base mb-12">
          Nivo offers a comprehensive video solution tailored for online content
          creators, emphasizing seamless developer integration, transparent
          pricing, and exceptional user experience.
        </p>

        <LoginButton />
      </section>
    </div>
  );
}
