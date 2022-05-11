import { useLocation } from "react-router-dom";
import useProfileQuery from "../../../hooks/useProfileQuery";
import profileQueryAnalyzer from "../../../lib/profileQueryAnalyzer";
import { AvatarResponse } from "../../../type/avatar";
import AvatarList from "./AvatarList";

const Avatar = () => {
  const { state } = useLocation();
  const { nickname } = state as { nickname: string };
  const profileQuery = useProfileQuery<AvatarResponse>("avatar", nickname);

  const data = profileQueryAnalyzer(profileQuery);

  if (!("result" in data)) {
    return data;
  }

  return (
    <>
      <AvatarList {...data} />
    </>
  );
};

export default Avatar;
