import axios, { AxiosError } from "axios";
import { EquipmentResponse } from "./../type/equipment";
import { useQuery } from "react-query";

const getEquipment = async (nickname: string) => {
  const { data } = await axios.get<EquipmentResponse>(
    `https://codebebop.xyz/lostark/profile/equipment?nickname=${nickname}`
  );

  return data;
};

const useEquipmentQuery = (nickname: string) => {
  return useQuery<EquipmentResponse, AxiosError>(
    ["equipment", nickname],
    () => getEquipment(nickname),
    {
      enabled: !!nickname,
      staleTime: 1000 * 60,
      cacheTime: Infinity,
    }
  );
};

export default useEquipmentQuery;
