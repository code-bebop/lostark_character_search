import { useLocation } from "react-router-dom";
import useProfileQuery from "../../hooks/useProfileQuery";
import profileQueryAnalyzer from "../../lib/profileQueryAnalyzer";
import { AnotherResponse } from "../../type/another";
import AnotherCharacterList from "./AnotherCharacterList";

const AnotherCharacter = () => {
  const { state } = useLocation();
  const { nickname } = state as { nickname: string };
  const profileQuery = useProfileQuery<AnotherResponse>("another", nickname);

  const data = profileQueryAnalyzer(profileQuery);

  if (!("result" in data)) {
    return data;
  }

  return (
    <>
      <AnotherCharacterList {...data} />
    </>
  );
};

export default AnotherCharacter;
