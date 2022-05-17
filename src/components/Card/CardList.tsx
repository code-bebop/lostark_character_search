import styled from "styled-components";
import getItemRarity from "../../lib/getItemRarity";
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

const CardImage = styled.img<{ rarity: string }>`
  border: 2px solid
    ${({ theme, rarity }) => {
      switch (rarity) {
        case "일반":
          return theme.mainTheme.color.rarity.common;
        case "고급":
          return theme.mainTheme.color.rarity.uncommon;
        case "희귀":
          return theme.mainTheme.color.rarity.rare;
        case "영웅":
          return theme.mainTheme.color.rarity.epic;
        case "전설":
          return theme.mainTheme.color.rarity.legendary;
        default:
          return theme.mainTheme.color.white;
      }
    }};
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

const CardAwake = styled.div<{ rarity: string; isAwake: boolean }>`
  width: 100%;
  padding-bottom: calc(100% - 4px);
  background-color: ${({ rarity, isAwake, theme }) => {
    if (isAwake)
      switch (rarity) {
        case "일반":
          return theme.mainTheme.color.rarity.common;
        case "고급":
          return theme.mainTheme.color.rarity.uncommon;
        case "희귀":
          return theme.mainTheme.color.rarity.rare;
        case "영웅":
          return theme.mainTheme.color.rarity.epic;
        case "전설":
          return theme.mainTheme.color.rarity.legendary;
      }
    return theme.mainTheme.color.default;
  }};
  border: 2px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
`;

const CardName = styled.p<{ rarity: string }>`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme, rarity }) => {
    switch (rarity) {
      case "일반":
        return theme.mainTheme.color.rarity.common;
      case "고급":
        return theme.mainTheme.color.rarity.uncommon;
      case "희귀":
        return theme.mainTheme.color.rarity.rare;
      case "영웅":
        return theme.mainTheme.color.rarity.epic;
      case "전설":
        return theme.mainTheme.color.rarity.legendary;
      default:
        return theme.mainTheme.color.white;
    }
  }};
`;

const CardList = (data: CardResponse) => {
  return (
    <CardListBlock>
      {data.cardList.map((card, index) => {
        if (!card) {
          return (
            <CardBlock>
              <CardImage rarity="" />
            </CardBlock>
          );
        }

        const rarity = getItemRarity(card.rarity);

        const CardAwakeList = [...Array(card.awake.total)].map((n, index) => {
          const isAwake = card.awake.count < index + 1 ? false : true;
          return <CardAwake key={index} rarity={rarity} isAwake={isAwake} />;
        });

        return (
          <CardBlock key={index}>
            <CardImage
              src={`https://cdn-lostark.game.onstove.com/${card.image}`}
              rarity={rarity}
            />
            <CardAwakeBlock>{CardAwakeList}</CardAwakeBlock>
            <CardName rarity={rarity}>{card.name}</CardName>
          </CardBlock>
        );
      })}
    </CardListBlock>
  );
};

export default CardList;
