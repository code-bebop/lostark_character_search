export interface InfoResponse {
  result: string;
  result_error?: string;
  info: Info;
}

export interface Info {
  nickname: string;
  server: string;
  _class: string;
  level: Level;
  title: string;
  guild: string;
  pvp: string;
  wisdom: Wisdom;
  basic: Basic;
  battle: Battle;
  engrave: Engrave[];
  virtues: Virtues;
}

export interface Basic {
  attack: string;
  HP: string;
}

export interface Battle {
  crit: string;
  specialization: string;
  domination: string;
  swiftness: string;
  endurance: string;
  expertise: string;
}

export interface Engrave {
  name: string;
  description: string;
}

export interface Level {
  expedition: string;
  battle: string;
  gear: Gear;
}

export interface Gear {
  level: string;
  maxLevel: string;
}

export interface Virtues {
  wisdom: string;
  courage: string;
  charisma: string;
  kindness: string;
}

export interface Wisdom {
  level: string;
  name: string;
}
