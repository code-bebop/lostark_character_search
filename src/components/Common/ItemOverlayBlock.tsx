import styled from "styled-components";

export const ItemOverlayBlock = styled.div<{ set: Boolean }>`
  position: absolute;
  top: -50px;
  left: 150px;
  display: grid;
  grid-template-columns: ${({ set }) => (set ? `1fr 1fr` : `1fr`)};
  grid-template-rows: auto 1fr;
  grid-gap: 45px 30px;
  width: max-content;
  max-width: 800px;
  height: auto;
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  z-index: 1;
`;

export const ItemOverlayName = styled.p<{ rarity: string }>`
  font: ${({ theme }) => theme.mainTheme.font.body};
  font-weight: bold;
  color: ${({ rarity, theme }) => {
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
      case "유물":
        return theme.mainTheme.color.rarity.artifact;
      case "고대":
        return theme.mainTheme.color.rarity.ancient;
      case "에스더":
        return theme.mainTheme.color.rarity.esther;
    }
  }};
`;

export const ItemOverlayFirstGrid = styled.div`
  display: flex;
`;

export const ItemOverlayFirstGridR = styled.div`
  margin-left: 25px;

  p:not(:first-child) {
    margin-top: 5px;
  }
`;

export const ItemOverlaySecondGrid = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

export const ItemOverlayOptionBox = styled.div`
  &:not(:first-child) {
    margin-top: 10px;
  }

  & > p {
    font: ${({ theme }) => theme.mainTheme.font.body_14px};
    &:first-child {
      font-weight: bold;
    }
  }
`;

export const ItemOverlayOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
  margin-left: 0.5em;
  margin-top: 10px;

  & > p {
    &:not(:first-child) {
      margin-top: 5px;
    }
  }
`;

export const ItemOverlayPart = styled(ItemOverlayName)`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;

export const ItemOverlayLevel = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;
