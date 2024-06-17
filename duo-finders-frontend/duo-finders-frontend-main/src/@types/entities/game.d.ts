import { IAd } from "./ad";

export interface IGame {
  id: string;
  name: string;
  image: string;
  description: string;
  categoryId: string;
  countAds?: number;
  category?: {
    id: string;
    name: string;
  };
  ads: IAd[];
}
