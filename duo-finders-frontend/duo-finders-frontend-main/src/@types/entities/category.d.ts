import { IGame } from "./game";

export interface ICategory {
  id?: string;
  name: string;
  games: IGame[];
}
