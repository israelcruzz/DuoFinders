import { IAd } from "./ad";

export interface IUser {
  id?: string;
  name: string;
  avatar: string;
  banner: string;
  discord: string;
  ads?: IAd[];
}
