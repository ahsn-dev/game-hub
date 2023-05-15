import { GameQuery } from "../App";
import useData from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQurey: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: { genres: gameQurey.genre?.id, platform: gameQurey.platform?.id },
    },
    [gameQurey]
  );

export default useGames;
