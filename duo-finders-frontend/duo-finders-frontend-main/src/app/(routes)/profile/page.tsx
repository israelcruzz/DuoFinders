import { IAd } from "@/@types/entities/ad";
import MeAd from "@/components/me-ad";
import { MeAdProvider } from "@/components/me-ad-provider/me-ad-provider";
import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";
import { api } from "@/services/api";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

interface fetchAdsRequest {
  data: IAd[];
}

const fetchAds = async () => {
  const ads: fetchAdsRequest = await api.get("/user/ads");

  return ads;
};

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const discordImage = `https://cdn.discordapp.com/avatars/${session?.user.discordProfile.id}/${session?.userApi.avatar}.png`;

  const ads = await fetchAds();

  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <div className="w-full">
        <section className="w-full bg-[#000000]/60 rounded-t-3xl h-28  xl:block"></section>
        <section className="w-full bg-[#2A2634] rounded-b-3xl h-28  xl:block"></section>

        <div className="flex flex-col xl:flex-row items-center gap-6 -mt-48 xl:-mt-48 xl:ml-6 xl:items-end">
          <Image
            src={discordImage}
            width={128}
            height={128}
            alt="profile-image"
            quality={100}
            className="object-cover w-16 h-16 xl:w-32 xl:h-32 rounded-full"
          />
          <div className="flex flex-col justify-end mt-6">
            <h1 className="text-white font-semibold text-xs  xl:text-base">
              {session.userApi.name}
            </h1>
            <h2 className="font-medium text-[#9F9F9F]/60 text-[8px] xl:text-base ">
              @{session.userApi.discord}
            </h2>
          </div>
        </div>
      </div>

      <section className="mt-12 flex flex-col gap-6">
        <h1 className="text-white text-2xl font-semibold mt-6">Meus Anúncios</h1>

        {ads.data.length === 0 ? (
          <h1 className="text-white">Você não possui anúncios.</h1>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {ads.data.map((ad, index) => {
              return (
                <MeAdProvider
                  id={ad.id}
                  key={index}
                  gameName={ad.name}
                  hourEnd={ad.hoursEnd}
                  hourStart={ad.hoursStart}
                  name={ad.name}
                  useVoiceChannel={ad.useVoiceChannel}
                  weekDays={ad.weekDays}
                  yearsPlaying={ad.yearPlaying}
                  session={session}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
