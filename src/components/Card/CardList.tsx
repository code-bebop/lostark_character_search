import styled from "styled-components";
import { CardResponse } from "../../type/card";

const CardListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
`;

const CardBlock = styled.div`
  display: grid;
  grid-row-gap: 10px;
  text-align: center;
`;

const CardImage = styled.img`
  border: 2px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 10px;
  min-width: 140px;
  min-height: 240px;
`;

const CardAwakeBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  width: 100%;
`;

const CardAwake = styled.div<{ isAwake: boolean }>`
  width: 100%;
  padding-bottom: calc(100% - 4px);
  background-color: ${({ isAwake, theme }) =>
    isAwake
      ? theme.mainTheme.color.rarity.legendary
      : theme.mainTheme.color.white};
  border: 2px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
`;

const CardName = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme }) => theme.mainTheme.color.rarity.legendary};
`;

const CardList = (data: CardResponse) => {
  return (
    <CardListBlock>
      {data.cardList.map((card, index) => {
        if (!card) {
          return (
            <CardBlock>
              <CardImage />
            </CardBlock>
          );
        }

        const CardAwakeList = [...Array(card.awake.total)].map((n, index) => {
          const isAwake = card.awake.count < index + 1 ? false : true;
          return <CardAwake key={index} isAwake={isAwake} />;
        });

        return (
          <CardBlock key={index}>
            <CardImage
              src={`https://cdn-lostark.game.onstove.com/${card.image}`}
            />
            <CardAwakeBlock>{CardAwakeList}</CardAwakeBlock>
            <CardName>{card.name}</CardName>
          </CardBlock>
        );
      })}
    </CardListBlock>
  );
};

export default CardList;
