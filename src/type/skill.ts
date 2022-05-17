import { BasicResponse } from "./basicResponse";

export interface SkillResponse extends BasicResponse {
  result: string;
  skillList: SkillList[];
}

export interface SkillList {
  name: string;
  level: number;
  type: string;
  image: string;
  tripod?: Array<SelectedTripodList[]>;
  selectedTripodList?: SelectedTripodList[];
  rune?: Rune;
}

export interface Rune {
  name: string;
  grade: string;
  description: string;
}

export interface SelectedTripodList {
  name: string;
  description: string;
  level: number;
  image: string;
}
