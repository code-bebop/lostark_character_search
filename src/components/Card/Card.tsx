import { useLocation } from "react-router-dom";
import useProfileQuery from "../../hooks/useProfileQuery";
import profileQueryAnalyzer from "../../lib/profileQueryAnalyzer";
import { CardResponse } from "../../type/card";
import CardList from "./CardList";
import CardOverview from "./CardOverview";

const Card = () => {
  const location = useLocation();
  const { nickname } = location.state as { nickname: string };
  const cardQuery = useProfileQuery<CardResponse>("card", nickname);

  const data = profileQueryAnalyzer(cardQuery);

  if (!("result" in data)) {
    return data;
  }

  return (
    <>
      <CardList {...data} />
      <CardOverview {...data} />
    </>
  );
};

export default Card;
