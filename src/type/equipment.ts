export interface EquipmentResponse {
  result: string;
  result_error?: string;
  equipmentList: EquipmentList[];
}

export interface EquipmentList {
  name: string;
  upgrade: string;
  parts: string;
  level: string;
  quality: number;
  option?: Option;
  set?: Set;
  image?: string;
}

export interface Option {
  basic: Basic;
  plus?: Plus;
  tripod?: { [key: string]: Tripod };
  esther?: { [key: string]: string };
  engravingEffects?: { [key: string]: EngravingEffect };
  reforgeBonus?: ReforgeBonus;
}

export interface Basic {
  "물리 방어력 "?: string;
  "마법 방어력 "?: string;
  "지능 "?: string;
  "체력 "?: string;
  "무기 공격력 "?: string;
  "힘 "?: string;
  "민첩 "?: string;
}

export interface EngravingEffect {
  name: string;
  value: string;
  isReduced?: boolean;
}

export interface Plus {
  "생명 활성력 "?: string;
  "추가 피해 "?: string;
  "치명 "?: string;
  "특화 "?: string;
}

export interface ReforgeBonus {
  "체력 ": string;
}

export interface Tripod {
  name: string;
  level: string;
}

export interface Set {
  setItemEnableList?: string[];
  setItemDisableList?: string[];
  setEffect?: SetEffect[];
}

export interface SetEffect {
  setEffect: string;
  setEffectLevel: string;
  setEnable: boolean;
}
