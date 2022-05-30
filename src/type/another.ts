import { BasicResponse } from "./basicResponse";

export interface AnotherResponse extends BasicResponse {
  characterServer: string;
  anotherCharacterList: anotherCharacterList[];
}

export interface anotherCharacterList {
  name: string;
  server: string;
  level: string;
  _class: string;
}
