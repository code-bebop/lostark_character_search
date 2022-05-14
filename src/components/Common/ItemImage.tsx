import styled from "styled-components";

const ItemImage = styled.img<{ rarity: string }>`
  width: 64px;
  height: 64px;
  margin-left: 60px;
  background: ${({ rarity: tier }) => {
    switch (tier) {
      case "일반":
        return `linear-gradient(135deg,#232323,#575757)`;
      case "고급":
        return `linear-gradient(135deg,#18220b,#304911)`;
      case "희귀":
        return `linear-gradient(135deg,#111f2c,#113d5d)`;
      case "영웅":
        return `linear-gradient(135deg,#261331,#480d5d)`;
      case "전설":
        return `linear-gradient(135deg,#362003,#9e5f04)`;
      case "유물":
        return `linear-gradient(135deg,#341a09,#a24006)`;
      case "고대":
        return `linear-gradient(135deg,#3d3325,#dcc999)`;
      case "에스더":
        return `linear-gradient(135deg,#0c2e2c,#2faba8)`;
      default:
        return `linear-gradient(135deg,#0E0D29,#05005C)`;
    }
  }};
`;

export default ItemImage;
