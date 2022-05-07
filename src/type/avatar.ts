export interface AvatarResponse {
  result: string;
  result_error?: string;
  avatarList: AvatarList[];
}

export interface AvatarList {
  name: string;
  parts: string;
  layered: boolean;
  option: Option;
  image: string;
}

export interface Option {
  basic?: Basic;
  tendency: { [key: string]: Basic };
}

export interface Basic {
  name: Name;
  value: string;
}

export enum Name {
  담력 = "담력",
  매력 = "매력",
  지능 = "지능 ",
  지성 = "지성",
  친절 = "친절",
}
