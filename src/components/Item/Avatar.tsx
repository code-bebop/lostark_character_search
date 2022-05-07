import { useLocation } from "react-router-dom";
import useProfileQuery from "../../hooks/useProfileQuery";
import getProfileData from "../../lib/getProfileData";
import { EquipmentResponse } from "../../type/equipment";

const Avatar = () => {
  const { state } = useLocation();
  const { nickname } = state as { nickname: string };
  const profileQuery = useProfileQuery<EquipmentResponse>("avatar", nickname);

  const data = getProfileData(profileQuery);

  if (!("result" in data)) {
    return data;
  }

  return <p>{`Avatar ${nickname}`}</p>;
};

export default Avatar;
