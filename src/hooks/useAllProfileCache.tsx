import { AnotherResponse } from "../type/another";
import { AvatarResponse } from "../type/avatar";
import { CardResponse } from "../type/card";
import { EquipmentResponse } from "../type/equipment";
import { InfoResponse } from "../type/info";
import { JewelResponse } from "../type/jewel";
import { SkillResponse } from "../type/skill";
import useProfileQuery from "./useProfileQuery";

const useAllProfileCache = (nickname: string) => {
  useProfileQuery<EquipmentResponse>("equipment", nickname);
  useProfileQuery<AvatarResponse>("avatar", nickname);
  useProfileQuery<JewelResponse>("jewel", nickname);
  useProfileQuery<CardResponse>("card", nickname);
  useProfileQuery<SkillResponse>("skill", nickname);
  useProfileQuery<InfoResponse>("info", nickname);
  useProfileQuery<AnotherResponse>("another", nickname);
};

export default useAllProfileCache;
