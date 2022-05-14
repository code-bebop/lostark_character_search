import styled from "styled-components";
import getItemRarity from "../../../lib/getItemRarity";
import { EquipmentList } from "../../../type/equipment";
import ItemImage from "../../Common/ItemImage";
import {
  ItemOverlayBlock,
  ItemOverlayFirstGrid,
  ItemOverlayFirstGridR,
  ItemOverlayLevel,
  ItemOverlayName,
  ItemOverlayOptionBox,
  ItemOverlayOptionWrapper,
  ItemOverlayPart,
  ItemOverlaySecondGrid,
} from "../../Common/ItemOverlayBlock";

const EquipmentOverlayImage = styled(ItemImage)`
  margin-left: 0;
`;

const EquipmentThirdGrid = styled.div`
  grid-row: 1/3;
`;

const EquipmentSetEffectBox = styled(ItemOverlayOptionBox)<{
  isEnable: Boolean;
}>`
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

const EquipmentSetEffectWrapper = styled(ItemOverlayOptionWrapper)`
  color: inherit;
  & > p {
    word-break: keep-all;
  }
`;

const EquipmentEstherBox = styled(ItemOverlayOptionBox)``;

const EquipmentEstherWrapper = styled(ItemOverlayOptionWrapper)``;

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

const EquipmentQualityWrapper = styled.p`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;

const EquipmentQualityBar = styled.span<{ quality: number }>`
  width: 130px;
  height: 15px;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  position: relative;
  margin-left: 10px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ quality }) => `${(quality / 100) * 128}px`};
    height: 13px;
    background-color: ${({ quality, theme }) => {
      switch (~~(quality / 25)) {
        case 0:
          return "#FFDC26";
        case 1:
          return theme.mainTheme.color.rarity.uncommon;
        case 2:
          return theme.mainTheme.color.rarity.rare;
        case 3:
          return theme.mainTheme.color.rarity.epic;
        case 4:
          return theme.mainTheme.color.rarity.legendary;
      }
    }};
  }
`;

const EquipmentOverlay = (equipment: EquipmentList) => {
  const equipmentRarity = getItemRarity(equipment.parts);

  const EquipmentOptionBasic = (
    <>
      <p>기본 효과</p>
      <ItemOverlayOptionWrapper>
        {equipment.option && equipment.option.basic
          ? Object.entries(equipment.option.basic).map(
              ([optionname, optionvalue], index) => {
                return (
                  <span key={index}>{`${optionname} ${optionvalue}`}</span>
                );
              }
            )
          : null}
      </ItemOverlayOptionWrapper>
    </>
  );

  const EquipmentOptionPlus = (
    <>
      <p>추가 효과</p>
      <ItemOverlayOptionWrapper>
        {equipment.option && equipment.option.plus
          ? Object.entries(equipment.option.plus).map(
              ([optionname, optionvalue], index) => {
                return (
                  <span key={index}>{`${optionname} ${optionvalue}`}</span>
                );
              }
            )
          : null}
      </ItemOverlayOptionWrapper>
    </>
  );

  const EquipmentTripodList = (
    <>
      <p>트라이포드 효과</p>
      <ItemOverlayOptionWrapper>
        {equipment.option && equipment.option.tripod
          ? Object.keys(equipment.option.tripod).map(
              (equipmentTripodIndex, index) => {
                return (
                  <span key={index}>
                    {`${
                      equipment?.option?.tripod![equipmentTripodIndex].name
                    } ${
                      equipment?.option?.tripod![equipmentTripodIndex].level
                    }`}
                  </span>
                );
              }
            )
          : null}
      </ItemOverlayOptionWrapper>
    </>
  );

  const EquipmentEngraveList = (
    <>
      <p>각인 효과</p>
      <ItemOverlayOptionWrapper>
        {equipment.option && equipment.option.engravingEffects
          ? Object.keys(equipment.option.engravingEffects).map(
              (equipmentEngraveIndex, index) => {
                return (
                  <span key={index}>
                    {`${
                      equipment?.option?.engravingEffects![
                        equipmentEngraveIndex
                      ].name
                    } ${
                      equipment?.option?.engravingEffects![
                        equipmentEngraveIndex
                      ].value
                    }`}
                  </span>
                );
              }
            )
          : null}
      </ItemOverlayOptionWrapper>
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
      <ItemOverlayOptionBox>
        <p>팔찌 효과</p>
        <ItemOverlayOptionWrapper>
          {Object.values(equipment.option.braceletEffects).map(
            (braceletEffect, index) => {
              return (
                <EstherEffectItem key={index}>
                  {braceletEffect.map((braceletLetter, index) => {
                    return <span key={index}>{braceletLetter}</span>;
                  })}
                </EstherEffectItem>
              );
            }
          )}
        </ItemOverlayOptionWrapper>
      </ItemOverlayOptionBox>
    ) : null;

  const EstherEffectList = (
    <EquipmentEstherBox>
      <p>에스더 효과</p>
      <EquipmentEstherWrapper>
        {equipment.option?.esther
          ? Object.values(equipment.option.esther).map(
              (estherEffectList, index) => {
                return (
                  <EstherEffectItem key={index}>
                    {Object.values(estherEffectList).map(
                      (estherEffect, index) => {
                        return <span key={index}>{estherEffect}</span>;
                      }
                    )}
                  </EstherEffectItem>
                );
              }
            )
          : null}
      </EquipmentEstherWrapper>
    </EquipmentEstherBox>
  );

  const EquipmentQualityBlock = (
    <EquipmentQualityWrapper>
      <span>{`품질 ${equipment.quality}`}</span>
      <EquipmentQualityBar quality={equipment.quality} />
    </EquipmentQualityWrapper>
  );

  const EquipmentReforgeBonus = (
    <>
      <p>세공 단계 보너스</p>
      {equipment.option && equipment.option.reforgeBonus ? (
        <ItemOverlayOptionWrapper>
          {Object.entries(equipment.option.reforgeBonus).map(
            ([reforgeBonusName, reforegeBonusValue], index) => (
              <span
                key={index}
              >{`${reforgeBonusName} ${reforegeBonusValue}`}</span>
            )
          )}
        </ItemOverlayOptionWrapper>
      ) : null}
    </>
  );

  return (
    <ItemOverlayBlock set={equipment.set ? true : false}>
      <ItemOverlayFirstGrid>
        <EquipmentOverlayImage
          src={`https://cdn-lostark.game.onstove.com/${equipment.image}`}
          rarity={equipmentRarity}
        />
        <ItemOverlayFirstGridR>
          <ItemOverlayName rarity={equipmentRarity}>
            {equipment.name}
          </ItemOverlayName>
          <ItemOverlayPart rarity={equipmentRarity}>
            {equipment.parts}
          </ItemOverlayPart>
          <ItemOverlayLevel>{equipment.level}</ItemOverlayLevel>
          {equipment.quality === -1 ? "" : EquipmentQualityBlock}
        </ItemOverlayFirstGridR>
      </ItemOverlayFirstGrid>
      <ItemOverlaySecondGrid>
        <ItemOverlayOptionBox>
          {equipment.option && equipment.option.basic
            ? EquipmentOptionBasic
            : null}
        </ItemOverlayOptionBox>
        <ItemOverlayOptionBox>
          {equipment.option && equipment.option.plus
            ? EquipmentOptionPlus
            : null}
          {equipment.option && equipment.option.reforgeBonus
            ? EquipmentReforgeBonus
            : null}
        </ItemOverlayOptionBox>
        <ItemOverlayOptionBox>
          {equipment.option && equipment.option.tripod
            ? EquipmentTripodList
            : null}
          {equipment.option && equipment.option.engravingEffects
            ? EquipmentEngraveList
            : null}
          {equipment.option && equipment.option.braceletEffects
            ? EquipmentBracletEffects
            : null}
        </ItemOverlayOptionBox>
      </ItemOverlaySecondGrid>
      {equipment.set ? (
        <EquipmentThirdGrid>
          {equipment.option?.esther ? (
            <>{EstherEffectList}</>
          ) : (
            <ItemOverlayOptionBox>
              <p>{equipment.set.setEnableOverview}</p>
              <EquipmentSetEffectWrapper>
                {EquipmentSetList}
              </EquipmentSetEffectWrapper>
            </ItemOverlayOptionBox>
          )}
          {EquipmentSetEffectList}
        </EquipmentThirdGrid>
      ) : null}
    </ItemOverlayBlock>
  );
};

export default EquipmentOverlay;
