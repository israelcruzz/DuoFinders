import { IGame } from "@/@types/entities/game";
import { GameCard } from "@/components/game-card";
import { SearchInput } from "@/components/search-input";
import { api } from "@/services/api";
import axios from "axios";

interface PageSearchParams {
  searchParams: {
    q: string;
  };
}

interface fetchGamesResponse {
  data: IGame[];
}

const fetchGames = async (q: string) => {
  try {
    const games: fetchGamesResponse = await api.get(`/games?query=${q}`);

    return games;
  } catch (error) {}
};

export default async function Page({ searchParams }: PageSearchParams) {
  const games = await fetchGames(searchParams.q);

  console.log(games);

  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <SearchInput />

      <h1 className="text-slate-200">
        Foram encontrados{" "}
        <span className="font-bold">{games?.data.length}</span> jogos com a
        letra <span className="font-bold">{searchParams.q}</span>
      </h1>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 ">
        {games?.data.length === 0 ? (
          <h1 className="text-white flex">
            Não foram encontrados jogos com este nome.
          </h1>
        ) : (
          games?.data.map((game, index) => {
            return (
              <GameCard
                key={index}
                title={game.name}
                countAds={game.ads.length}
                imageUri={game.image}
                id={game.id.toString()}
              />
            );
          })
        )}
      </div>
    </main>
  );
}
