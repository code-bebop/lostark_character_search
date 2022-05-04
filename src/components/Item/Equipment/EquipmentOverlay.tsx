import styled from "styled-components";
import { EquipmentList } from "../../../type/equipment";
import { EquipmentImage } from "./EquipmentList";

const EquipmentOverlayBlock = styled.div<{ set: Boolean }>`
  position: absolute;
  top: -50px;
  left: 90px;
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
`;

const EquipmentOverlayFirstGrid = styled.div`
  display: flex;
`;

const EquipmentOverlayFirstGridR = styled.div`
  margin-left: 25px;

  p:not(:first-child) {
    margin-top: 5px;
  }
`;

const EquipmentName = styled.p<{ rarity: string }>`
  font: ${({ theme }) => theme.mainTheme.font.body};
  font-weight: bold;
  color: ${({ rarity, theme }) => {
    switch (rarity) {
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
`;

const EquipmentPart = styled(EquipmentName)`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;

const EquipmentLevel = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;

const EquipmentQuality = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;

const EquipmentSecondGrid = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const EquipmentPartBox = styled.div`
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

const EquipmentPartWrapper = styled.div`
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

const EquipmentThirdGrid = styled.div`
  grid-row: 1/3;
`;

const EquipmentSetEffectBox = styled(EquipmentPartBox)<{ isEnable: Boolean }>`
  color: ${({ isEnable, theme }) =>
    isEnable ? theme.mainTheme.color.white : theme.mainTheme.color.disable};
  & > p {
    &:first-child {
      font-weight: ${({ isEnable }) => (isEnable ? `bold` : `normal`)};
    }
  }
`;

const EquipmentSetItem = styled.p<{ isEnable: Boolean }>`
  color: ${({ isEnable, theme }) =>
    isEnable ? theme.mainTheme.color.white : theme.mainTheme.color.disable};
`;

const EquipmentSetEffectWrapper = styled(EquipmentPartWrapper)`
  color: inherit;
  & > p {
    word-break: keep-all;
  }
`;

const EquipmentEstherBox = styled(EquipmentPartBox)``;

const EquipmentEstherWrapper = styled(EquipmentPartWrapper)``;

const EstherEffectItem = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
  position: relative;
  & > p {
    word-break: keep-all;
  }

  &::before {
    content: "•";
    display: inline;
    position: absolute;
    left: -1em;
    color: ${({ theme }) => theme.mainTheme.color.sub};
  }
`;

const EquipmentOverlay = (equipment: EquipmentList) => {
  const equipmentRarity = equipment.parts ? equipment.parts.split(" ")[0] : "";

  const EquipmentOptionBasic = (
    <>
      <p>기본 효과</p>
      <EquipmentPartWrapper>
        {equipment.option && equipment.option.basic
          ? Object.entries(equipment.option.basic).map(
              ([optionname, optionvalue], index) => {
                return <p key={index}>{`${optionname} ${optionvalue}`}</p>;
              }
            )
          : null}
      </EquipmentPartWrapper>
    </>
  );

  const EquipmentOptionPlus = (
    <>
      <p>추가 효과</p>
      <EquipmentPartWrapper>
        {equipment.option && equipment.option.plus
          ? Object.entries(equipment.option.plus).map(
              ([optionname, optionvalue], index) => {
                return <p key={index}>{`${optionname} ${optionvalue}`}</p>;
              }
            )
          : null}
      </EquipmentPartWrapper>
    </>
  );

  const EquipmentTripodList = (
    <>
      <p>트라이포드 효과</p>
      <EquipmentPartWrapper>
        {equipment.option && equipment.option.tripod
          ? Object.keys(equipment.option.tripod).map(
              (equipmentTripodIndex, index) => {
                return (
                  <p key={index}>
                    {`${
                      equipment?.option?.tripod![equipmentTripodIndex].name
                    } ${
                      equipment?.option?.tripod![equipmentTripodIndex].level
                    }`}
                  </p>
                );
              }
            )
          : null}
      </EquipmentPartWrapper>
    </>
  );

  const EquipmentEngraveList = (
    <>
      <p>각인 효과</p>
      <EquipmentPartWrapper>
        {equipment.option && equipment.option.engravingEffects
          ? Object.keys(equipment.option.engravingEffects).map(
              (equipmentEngraveIndex, index) => {
                return (
                  <p key={index}>
                    {`${
                      equipment?.option?.engravingEffects![
                        equipmentEngraveIndex
                      ].name
                    } ${
                      equipment?.option?.engravingEffects![
                        equipmentEngraveIndex
                      ].value
                    }`}
                  </p>
                );
              }
            )
          : null}
      </EquipmentPartWrapper>
    </>
  );

  const EquipmentSetList =
    equipment.set &&
    equipment.set.setItemEnableList &&
    equipment.set.setItemDisableList
      ? [...equipment.set.setItemEnableList, equipment.set.setItemDisableList]
          .flat()
          .sort((a, b) => {
            let aOrder = 0;
            let bOrder = 0;

            if (a.includes("머리")) aOrder = 0;
            else if (a.includes("어깨")) aOrder = 1;
            else if (a.includes("상의")) aOrder = 2;
            else if (a.includes("하의")) aOrder = 3;
            else if (a.includes("장갑")) aOrder = 4;
            else aOrder = 5;

            if (b.includes("머리")) bOrder = 0;
            else if (b.includes("어깨")) bOrder = 1;
            else if (b.includes("상의")) bOrder = 2;
            else if (b.includes("하의")) bOrder = 3;
            else if (b.includes("장갑")) bOrder = 4;
            else bOrder = 5;

            return aOrder - bOrder;
          })
          .map((setItem, index) => (
            <EquipmentSetItem key={index} isEnable={setItem.includes("[")}>
              {setItem}
            </EquipmentSetItem>
          ))
      : null;

  const EquipmentSetEffectList = equipment.set?.setEffect?.map(
    (_setEffect, index) => {
      const { setEffect, setEffectLevel, setEnable } = _setEffect;
      return (
        <EquipmentSetEffectBox key={index} isEnable={setEnable}>
          <p>{setEffectLevel.replace("[", " [")}</p>
          {Object.values(setEffect).map((setEffectLetter, index) => {
            return (
              <EquipmentSetEffectWrapper key={index}>
                <p>{setEffectLetter}</p>
              </EquipmentSetEffectWrapper>
            );
          })}
        </EquipmentSetEffectBox>
      );
    }
  );

  const EquipmentBracletEffects =
    equipment.option && equipment.option.braceletEffects ? (
      <EquipmentPartBox>
        <p>팔찌 효과</p>
        <EquipmentPartWrapper>
          {Object.values(equipment.option.braceletEffects).map(
            (braceletEffect, index) => {
              return (
                <EstherEffectItem key={index}>
                  {braceletEffect.map((braceletLetter, index) => {
                    return <p key={index}>{braceletLetter}</p>;
                  })}
                </EstherEffectItem>
              );
            }
          )}
        </EquipmentPartWrapper>
      </EquipmentPartBox>
    ) : null;

  const EstherEffectList = (
    <EquipmentEstherBox>
      <p>에스더 효과</p>
      <EquipmentEstherWrapper>
        {equipment.option?.esther
          ? Object.values(equipment.option.esther).map((estherEffectList) => {
              return (
                <EstherEffectItem>
                  {Object.values(estherEffectList).map(
                    (estherEffect, index) => {
                      return <p key={index}>{estherEffect}</p>;
                    }
                  )}
                </EstherEffectItem>
              );
            })
          : null}
      </EquipmentEstherWrapper>
    </EquipmentEstherBox>
  );

  return (
    <EquipmentOverlayBlock set={equipment.set ? true : false}>
      <EquipmentOverlayFirstGrid>
        <EquipmentImage
          src={`https://cdn-lostark.game.onstove.com/${equipment.image}`}
          tier={equipmentRarity}
        />
        <EquipmentOverlayFirstGridR>
          <EquipmentName rarity={equipmentRarity}>
            {equipment.name}
          </EquipmentName>
          <EquipmentPart rarity={equipmentRarity}>
            {equipment.parts}
          </EquipmentPart>
          <EquipmentLevel>{equipment.level}</EquipmentLevel>
          <EquipmentQuality>
            {equipment.quality === -1 ? "" : `품질 ${equipment.quality}`}
          </EquipmentQuality>
        </EquipmentOverlayFirstGridR>
      </EquipmentOverlayFirstGrid>
      <EquipmentSecondGrid>
        <EquipmentPartBox>
          {equipment.option && equipment.option.basic
            ? EquipmentOptionBasic
            : null}
        </EquipmentPartBox>
        <EquipmentPartBox>
          {equipment.option && equipment.option.plus
            ? EquipmentOptionPlus
            : null}
        </EquipmentPartBox>
        <EquipmentPartBox>
          {equipment.option && equipment.option.tripod
            ? EquipmentTripodList
            : null}
          {equipment.option && equipment.option.engravingEffects
            ? EquipmentEngraveList
            : null}
          {equipment.option && equipment.option.braceletEffects
            ? EquipmentBracletEffects
            : null}
        </EquipmentPartBox>
      </EquipmentSecondGrid>
      {equipment.set ? (
        <EquipmentThirdGrid>
          {equipment.option?.esther ? (
            <>{EstherEffectList}</>
          ) : (
            <EquipmentPartBox>
              <p>{equipment.set.setEnableOverview}</p>
              <EquipmentSetEffectWrapper>
                {EquipmentSetList}
              </EquipmentSetEffectWrapper>
            </EquipmentPartBox>
          )}
          {EquipmentSetEffectList}
        </EquipmentThirdGrid>
      ) : null}
    </EquipmentOverlayBlock>
  );
};

export default EquipmentOverlay;
