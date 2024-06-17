import { IAd } from "@/@types/entities/ad";
import { ICategory } from "@/@types/entities/category";
import { IGame } from "@/@types/entities/game";
import { CreateAdPoster } from "@/components/create-ad-poster";
import { GameCard } from "@/components/game-card";
import { RecentAdsCard } from "@/components/recent-ads-card";
import { SearchInput } from "@/components/search-input";
import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";
import { api } from "@/services/api";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { fetchGamesRequest } from "./games/page";

export const metadata: Metadata = {
  title: "Home",
};

interface fetchFamousGamesRequest {
  data: IGame[];
}

interface fetchRecentAdsRequest {
  data: IAd[];
}

const fetchFamousGames = async () => {
  const games: fetchFamousGamesRequest = await api.get("/famous/game");

  return games;
};

const fetchRecentAds = async () => {
  const ads: fetchRecentAdsRequest = await api.get("/ad/recents");

  return ads;
};

const fetchGames = async () => {
  const games: fetchGamesRequest = await api.get("/games");

  return games.data;
};

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const famousGames = await fetchFamousGames();
  const recentAds = await fetchRecentAds();
  const games = await fetchGames();

  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <SearchInput />
      <CreateAdPoster games={games} session={session} />

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white font-bold text-base xl:text-2xl">
            Games Populares
          </h1>
          <Link href="/games" className="text-[#650C71] text-sm">
            Ver Mais
          </Link>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-5 2xl:grid-cols-8 gap-8">
          {famousGames.data.slice(0, 5).map((game, index) => {
            return (
              <GameCard
                key={index}
                id={game.id.toString()}
                title={game.name}
                imageUri={game.image}
                countAds={game.countAds ?? 0}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-[290px] p-6 bg-[#2A2634] rounded-3xl">
          <h1 className="text-[#B8B8B8] font-medium text-base">
            Encontre seu duo
          </h1>

          <div className="flex gap-2 text-white">
            <span className="font-bold">AGORA</span>
            <Image src="/arrow-ad.svg" width={56.5} height={0} alt="arrow" />
          </div>

          <Image
            src="/recent-ads-image.svg"
            width={251}
            height={138}
            quality={100}
            alt="recent ads image"
          />
        </div>

        <div className="w-full p-6 bg-[#2A2634] rounded-3xl flex-1">
          <h1 className="font-semibold text-white text-base mb-6">
            Anúncios Recentes
          </h1>
          <div className="flex flex-col gap-3">
            {famousGames.data.slice(0, 3).map((game, index) => {
              return (
                <RecentAdsCard
                  key={index}
                  category={game.category?.name ?? "Nenhuma"}
                  gameId={game.id}
                  imageUri={game.image}
                  title={game.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
