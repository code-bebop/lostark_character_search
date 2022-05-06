import axios, { AxiosError } from "axios";
import { EquipmentResponse } from "../type/equipment";
import { useQuery } from "react-query";

type ProfileQueryUrl =
  | "equipment"
  | "avatar"
  | "jewel"
  | "card"
  | "skill"
  | "info"
  | "another";

const getProfile = async (url: ProfileQueryUrl, nickname: string) => {
  const { data } = await axios.get<EquipmentResponse>(
    `https://codebebop.xyz/lostark/profile/${url}?nickname=${nickname}`
  );

  return data;
};

const useProfileQuery = (url: ProfileQueryUrl, nickname: string) => {
  return useQuery<EquipmentResponse, AxiosError>(
    [url, nickname],
    () => getProfile(url, nickname),
    {
      enabled: !!nickname,
      staleTime: 1000 * 60,
      cacheTime: Infinity,
    }
  );
};

export default useProfileQuery;
