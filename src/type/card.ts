import { BasicResponse } from "./basicResponse";

export interface CardResponse extends BasicResponse {
  cardList: CardList[] | null[];
  cardEffectList: CardEffectList[];
}

export interface CardList {
  name: string;
  description: string;
  awake: Awake;
  image: string;
}

export interface Awake {
  count: number;
  total: number;
}

export interface CardEffectList {
  title: string;
  description: string;
}
