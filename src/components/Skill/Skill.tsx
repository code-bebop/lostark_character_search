import { useLocation } from "react-router-dom";
import useProfileQuery from "../../hooks/useProfileQuery";
import profileQueryAnalyzer from "../../lib/profileQueryAnalyzer";
import { SkillResponse } from "../../type/skill";
import { ViewWrapper } from "../Common/ViewWrapper";
import SkillList from "./SkillList";

const Skill = () => {
  const { state } = useLocation();
  const { nickname } = state as { nickname: string };
  const profileQuery = useProfileQuery<SkillResponse>("skill", nickname);

  const data = profileQueryAnalyzer(profileQuery);

  if (!("result" in data)) {
    return data;
  }

  return (
    <ViewWrapper>
      <SkillList {...data} />
    </ViewWrapper>
  );
};

export default Skill;
