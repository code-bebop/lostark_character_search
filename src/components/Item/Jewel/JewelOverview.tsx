import styled from "styled-components";

import { JewelResponse } from "../../../type/jewel";

const JewelOverviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
`;

const JewelOverviewTitleBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  & > p {
    font: ${({ theme }) => theme.mainTheme.font.lead};
  }
`;

const JewelEnableListBlock = styled.div`
  padding: 30px;
`;

const JewelEnableListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    margin-top: 10px;
  }
  & > p {
    &:not(:first-child) {
      margin-left: 1em;
      font-weight: 600;
    }
  }
`;

const JewelEnableName = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme }) => theme.mainTheme.color.sub};
`;

const JewelOverview = (data: JewelResponse) => {
  const jewelEnableList = data.jewelList
    .map((jewel) => {
      return jewel.effect.match(/(?<=]).+(?=피해|재사용)/gi);
    })
    .filter((v): v is RegExpMatchArray => v !== null)
    .map((v) => v[0])
    .reduce<string[]>((ac, v) => (ac.includes(v) ? ac : [...ac, v]), [])
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));

  const JewelEnableList = jewelEnableList.map((jewelEnable, index) => {
    return (
      <JewelEnableListWrapper key={index}>
        <JewelEnableName>{jewelEnable}</JewelEnableName>
        {data.jewelList.map((jewel, index) => {
          if (jewel.effect.includes(jewelEnable)) {
            return (
              <p key={index}>
                {jewel.effect.split(/(?<=]).+(?=피해|재사용)/gi)[1]}
              </p>
            );
          }
          return null;
        })}
      </JewelEnableListWrapper>
    );
  });

  return (
    <JewelOverviewBlock>
      <JewelOverviewTitleBlock>
        <p>장착 중인 보석 효과</p>
      </JewelOverviewTitleBlock>
      <JewelEnableListBlock>{JewelEnableList}</JewelEnableListBlock>
    </JewelOverviewBlock>
  );
};

export default JewelOverview;
