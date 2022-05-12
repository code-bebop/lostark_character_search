import { BasicResponse } from "./basicResponse";

export interface JewelResponse extends BasicResponse {
  jewelList: JewelListT[];
}

export interface JewelListT {
  name: string;
  grade: string;
  tier: string;
  effect: string;
  image: string;
}
