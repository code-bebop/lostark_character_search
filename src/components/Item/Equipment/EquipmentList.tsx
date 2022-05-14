import { useState } from "react";
import styled from "styled-components";
import getItemRarity from "../../../lib/getItemRarity";
import { EquipmentResponse } from "../../../type/equipment";
import ItemImage from "../../Common/ItemImage";
import EquipmentOverlay from "./EquipmentOverlay";

export const EquipmentBlock = styled.div`
  display: flex;
  align-items: center;
  height: 108px;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const EquipmentCategoryWrapper = styled.div`
  position: relative;
  width: 11%;
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

export const EquipmentCategory = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.lead};
`;

const EquipmentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

export const EquipmentImageWrapper = styled.div`
  position: relative;
`;

export const EquipmentName = styled.p<{ rarity: string }>`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme, rarity: tier }) => {
    switch (tier) {
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
    const equipmentRarity = getItemRarity(equipment.parts);

    if (!equipment.name) {
      return (
        <EquipmentBlock key={index}>
          <EquipmentCategoryWrapper>
            <EquipmentCategory>{EquipmentPartsList[index]}</EquipmentCategory>
          </EquipmentCategoryWrapper>
          <EquipmentWrapper>
            <ItemImage rarity={equipmentRarity} />
            <EquipmentName rarity={equipmentRarity}>없음</EquipmentName>
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
            <ItemImage
              src={`https://cdn-lostark.game.onstove.com/${equipment.image}`}
              rarity={equipmentRarity}
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
          <EquipmentName rarity={equipmentRarity}>
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
