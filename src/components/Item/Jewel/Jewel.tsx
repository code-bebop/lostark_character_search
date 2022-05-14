import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useProfileQuery from "../../../hooks/useProfileQuery";
import profileQueryAnalyzer from "../../../lib/profileQueryAnalyzer";
import { JewelResponse } from "../../../type/jewel";
import JewelList from "./JewelList";
import JewelOverview from "./JewelOverview";

const JewelBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 58px;

  & > div {
    &:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 10px;
    }
  }
`;

const Jewel = () => {
  const location = useLocation();
  const { nickname } = location.state as { nickname: string };
  const jewelQuery = useProfileQuery<JewelResponse>("jewel", nickname);

  const data = profileQueryAnalyzer(jewelQuery);

  if (!("result" in data)) {
    return data;
  }

  return (
    <JewelBlock>
      <div>
        {data.jewelList.map((jewel, index) => {
          return <JewelList key={index} {...jewel} />;
        })}
      </div>
      <JewelOverview {...data} />
    </JewelBlock>
  );
};

export default Jewel;
