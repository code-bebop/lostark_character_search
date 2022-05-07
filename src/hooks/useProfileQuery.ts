import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

type ProfileQueryUrl =
  | "equipment"
  | "avatar"
  | "jewel"
  | "card"
  | "skill"
  | "info"
  | "another";

const getProfile = async <ResponseT>(
  url: ProfileQueryUrl,
  nickname: string
) => {
  const { data } = await axios.get<ResponseT>(
    `https://codebebop.xyz/lostark/profile/${url}?nickname=${nickname}`
  );

  return data;
};

const useProfileQuery = <ResponseT>(url: ProfileQueryUrl, nickname: string) => {
  return useQuery<ResponseT, AxiosError>(
    [url, nickname],
    () => getProfile<ResponseT>(url, nickname),
    {
      enabled: !!nickname,
      staleTime: 1000 * 60,
      cacheTime: Infinity,
    }
  );
};

export default useProfileQuery;
