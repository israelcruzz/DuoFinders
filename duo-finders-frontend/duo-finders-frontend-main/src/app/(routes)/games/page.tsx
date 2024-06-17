import { IGame } from "@/@types/entities/game";
import { GameCard } from "@/components/game-card";
import { SearchInput } from "@/components/search-input";
import { api } from "@/services/api";

export interface fetchGamesRequest {
  data: IGame[];
}

const fetchGames = async () => {
  const games: fetchGamesRequest = await api.get("/games");

  return games;
};

export default async function Games() {
  const games = await fetchGames();

  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <SearchInput />

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 ">
        {games.data.map((game, index) => {
          return (
            <GameCard
              key={index}
              title={game.name}
              countAds={game.ads.length}
              imageUri={game.image}
              id={game.id.toString()}
            />
          );
        })}
      </div>
    </main>
  );
}
