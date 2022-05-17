import styled from "styled-components";
import { CardResponse } from "../../../type/card";

const CardOverviewBlock = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
  margin-top: 30px;
`;

const CardOverviewListBlock = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 30px;
`;

const CardOverviewTitle = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme }) => theme.mainTheme.color.white};
`;

const CardOverviewName = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme }) => theme.mainTheme.color.white};
`;

const CardOverviewEffect = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body};
  font-weight: 700;
  color: ${({ theme }) => theme.mainTheme.color.white};
`;

const CardOverview = (data: CardResponse) => {
  return (
    <CardOverviewBlock>
      <CardOverviewTitle>개요</CardOverviewTitle>
      <CardOverviewListBlock>
        {data.cardEffectList.map((cardEffect, index) => {
          return (
            <div key={index}>
              <CardOverviewName>{cardEffect.title}</CardOverviewName>
              <CardOverviewEffect>{cardEffect.description}</CardOverviewEffect>
            </div>
          );
        })}
      </CardOverviewListBlock>
    </CardOverviewBlock>
  );
};

export default CardOverview;
