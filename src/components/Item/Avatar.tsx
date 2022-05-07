import { useLocation } from "react-router-dom";
import useProfileQuery from "../../hooks/useProfileQuery";
import getProfileData from "../../lib/getProfileData";

const Avatar = () => {
  const { state } = useLocation();
  const { nickname } = state as { nickname: string };
  const profileQuery = useProfileQuery<AvatarResponse>("avatar", nickname);

  const data = getProfileData(profileQuery);

  if (!("result" in data)) {
    return data;
  }

  return <p>{`Avatar ${nickname}`}</p>;
};

export default Avatar;
