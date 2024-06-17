import Ad from "@/components/ad";
import Image from "next/image";
import { api } from "@/services/api";
import { IAd } from "@/@types/entities/ad";

interface ViewAdsForGameParams {
  params: {
    id: string;
  };
}

interface FindGameApiResponse {
  id: string;
  name: string;
  image: string;
  description: string;
  categoryId: string;
  category: {
    name: string;
  };
}

interface FetchGameAdsRequest {
  data: IAd[];
}

interface FetchGameRequest {
  data: FindGameApiResponse;
}

const fetchGameAds = async (id: string) => {
  const game: FetchGameAdsRequest = await api.get(`/ads/${id}`);

  return game;
};

const fetchGame = async (id: string) => {
  const game: FetchGameRequest = await api.get(`/game/view/${id}`);

  return game;
};

export default async function ViewAdsForGame({ params }: ViewAdsForGameParams) {
  const game = await fetchGame(params.id);
  const gameAds = await fetchGameAds(params.id);

  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <div className="flex gap-6">
        <Image
          src={game.data.image}
          width={128}
          height={128}
          alt="game"
          className="w-16 h-16 xl:w-32 xl:h-32 rounded-full object-cover"
          quality={100}
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-white font-semibold text-xs  xl:text-base">
            {game.data.name}
          </h1>
          <h2 className="font-medium text-[#9F9F9F]/60 text-[8px] xl:text-base ">
            {game.data.category.name}
          </h2>
        </div>
      </div>

      <h1 className="text-white text-2xl font-semibold">Anúncios</h1>

      {gameAds.data.length !== 0 ? (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          {gameAds.data.map((ad, index) => {
            return (
              <Ad
                key={index}
                hoursStart={ad.hoursStart}
                hoursEnd={ad.hoursEnd}
                id={ad.id}
                name={ad.name}
                useVoiceChannel={ad.useVoiceChannel}
                weekDays={ad.weekDays}
                yearPlaying={ad.yearPlaying}
                createdAt={ad.createdAt}
                discord={ad.discord}
                gameId={ad.gameId}
                userId={ad.userId}
              />
            );
          })}
        </div>
      ) : (
        <h1 className="text-white">Este jogo não possui anúncios.</h1>
      )}
    </main>
  );
}
