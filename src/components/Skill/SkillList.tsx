import styled from "styled-components";
import getItemRarity from "../../lib/getItemRarity";
import { SkillResponse } from "../../type/skill";

const SkillListBlock = styled.div`
  padding: 35px 72px;
`;

const SkillListItem = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const SkillOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  padding: 22px 40px;
`;

const SkillImage = styled.img`
  width: 64px;
  height: 64px;
`;

const SkillName = styled.p`
  justify-self: center;
  align-self: center;
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme }) => theme.mainTheme.color.rarity.legendary};
`;

const SkillRune = styled.p<{ rarity: string }>`
  justify-self: end;
  align-self: center;
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
      case "유물":
        return theme.mainTheme.color.rarity.artifact;
      case "고대":
        return theme.mainTheme.color.rarity.ancient;
      case "에스더":
        return theme.mainTheme.color.rarity.esther;
    }
  }};
`;

const SkillTripodList = styled.div`
  min-height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px 0;

  & > p {
    &:not(:first-child) {
      margin-left: 25px;
    }
  }
`;

const SkillTripodItem = styled.p<{ order: number }>`
  color: ${({ order, theme }) => {
    switch (order) {
      case 0:
        return theme.mainTheme.color.rarity.rare;
      case 1:
        return theme.mainTheme.color.rarity.uncommon;
      case 2:
        return theme.mainTheme.color.rarity.legendary;
      default:
        theme.mainTheme.color.white;
    }
  }};
`;

const SkillList = (data: SkillResponse) => {
  return (
    <SkillListBlock>
      {data.skillList.map((skill, index) => {
        const { name, level, type, image, tripod, selectedTripodList, rune } =
          skill;

        const runeRarity = getItemRarity(rune?.grade);

        return (
          <SkillListItem key={index}>
            <SkillOverview>
              <SkillImage
                src={`https://cdn-lostark.game.onstove.com/${image}`}
              />
              <SkillName>{name}</SkillName>
              {rune && rune.name ? (
                <SkillRune
                  rarity={runeRarity}
                >{`${rune.grade} [${rune.name}]`}</SkillRune>
              ) : null}
            </SkillOverview>
            <SkillTripodList>
              {selectedTripodList?.map((selectedTripod, index) => {
                return (
                  <SkillTripodItem
                    order={index}
                    key={index}
                  >{`${selectedTripod.name} ${selectedTripod.level}`}</SkillTripodItem>
                );
              })}
            </SkillTripodList>
          </SkillListItem>
        );
      })}
    </SkillListBlock>
  );
};

export default SkillList;
