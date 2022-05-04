import { useEffect, useState } from "react";
import styled from "styled-components";
import { EquipmentResponse } from "../../../type/equipment";
import EquipmentOverlay from "./EquipmentOverlay";

const EquipmentBlock = styled.div`
  display: flex;
  align-items: center;
  height: 108px;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const EquipmentCategoryWrapper = styled.div`
  position: relative;
  width: 11%;
  margin-right: 60px;
  display: flex;
  justify-content: center;

  :after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 80px;
    border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  }
`;

const EquipmentCategory = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.lead};
`;

const EquipmentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

const EquipmentImageWrapper = styled.div`
  position: relative;
`;

export const EquipmentImage = styled.img<{ tier: string }>`
  width: 64px;
  height: 64px;
  background: ${({ theme, tier }) => {
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

const EquipmentName = styled.p<{ tier: string }>`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme, tier }) => {
    switch (tier) {
      case "일반":
        return theme.mainTheme.color.rarity.uncommon;
      case "고급":
        return theme.mainTheme.color.rarity.common;
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
  width: 59%;
  text-align: center;
`;

const EquipmentTripodList = styled.div``;

const EquipmentTripodItem = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
  margin: 3px 0;
`;

const EquipmentPartsList = [
  "머리",
  "어깨",
  "상의",
  "하의",
  "장갑",
  "무기",
  "목걸이",
  "반지 1",
  "반지 2",
  "귀걸이 1",
  "귀걸이 2",
  "팔찌",
  "스톤",
];

const EquipmentList = (data: EquipmentResponse) => {
  const [showOverlay, setShowOverlay] = useState(
    Array.from({ length: EquipmentPartsList.length }, () => false)
  );

  const _EquipmentList = data?.equipmentList.map((equipment, index) => {
    const equipmentRarity = equipment.parts
      ? equipment.parts.split(" ")[0]
      : "";

    if (!equipment.name) {
      return (
        <EquipmentBlock key={index}>
          <EquipmentCategoryWrapper>
            <EquipmentCategory>{EquipmentPartsList[index]}</EquipmentCategory>
          </EquipmentCategoryWrapper>
          <EquipmentWrapper>
            <EquipmentImage tier={equipmentRarity} />
            <EquipmentName tier={equipmentRarity}>없음</EquipmentName>
            <EquipmentTripodList />
          </EquipmentWrapper>
        </EquipmentBlock>
      );
    }

    return (
      <EquipmentBlock key={index}>
        <EquipmentCategoryWrapper>
          <EquipmentCategory>{EquipmentPartsList[index]}</EquipmentCategory>
        </EquipmentCategoryWrapper>
        <EquipmentWrapper>
          <EquipmentImageWrapper>
            <EquipmentImage
              src={`https://cdn-lostark.game.onstove.com/${equipment.image}`}
              tier={equipmentRarity}
              onMouseEnter={() =>
                setShowOverlay(() => {
                  showOverlay[index] = true;
                  return [...showOverlay];
                })
              }
              onMouseLeave={() =>
                setShowOverlay(() => {
                  showOverlay[index] = false;
                  return [...showOverlay];
                })
              }
            />
            {showOverlay[index] && <EquipmentOverlay {...equipment} />}
          </EquipmentImageWrapper>
          <EquipmentName tier={equipmentRarity}>
            {equipment.upgrade === "0" ? "" : equipment.upgrade}{" "}
            {equipment.name}
          </EquipmentName>
          <EquipmentTripodList>
            {equipment.option?.tripod
              ? Object.values(equipment.option.tripod).map(
                  (tripod, tripodIndex) => {
                    return (
                      <EquipmentTripodItem key={tripodIndex}>
                        {tripod.name.replace(/(\[([^\]]+)\])/i, "") +
                          tripod.level.replace("+", "")}
                      </EquipmentTripodItem>
                    );
                  }
                )
              : equipment.option?.engravingEffects
              ? Object.values(equipment.option.engravingEffects).map(
                  (engravingEffect, engravingEffectIndex) => {
                    return (
                      <EquipmentTripodItem key={engravingEffectIndex}>
                        {engravingEffect.name.split("] ")[0] +
                          "] " +
                          engravingEffect.value}
                      </EquipmentTripodItem>
                    );
                  }
                )
              : null}
          </EquipmentTripodList>
        </EquipmentWrapper>
      </EquipmentBlock>
    );
  });

  return <>{_EquipmentList}</>;
};

export default EquipmentList;
