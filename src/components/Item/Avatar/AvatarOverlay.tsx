import styled from "styled-components";

import getItemRarity from "../../../lib/getItemRarity";
import { AvatarList } from "../../../type/avatar";
import ItemImage from "../../Common/ItemImage";
import {
  EquipmentName,
  EquipmentOverlayBlock,
  EquipmentOverlayFirstGrid,
  EquipmentOverlayFirstGridR,
  EquipmentPart,
  EquipmentPartBox,
  EquipmentPartWrapper,
  EquipmentSecondGrid,
} from "../Equipment/EquipmentOverlay";

const AvatarOverlayImage = styled(ItemImage)`
  margin-left: 0;
`;

const AvatarTendencyWrapper = styled.div`
  display: flex;
  & > span {
    font: ${({ theme }) => theme.mainTheme.font.body_14px};
    margin-left: 10px;
    &:not(:first-child) {
      margin-left: 0.5em;
    }
  }
`;

const AvatarTendencyBox = styled(EquipmentPartBox)`
  & > p {
    margin-bottom: 10px;
  }
`;

const AvatarOverlay = (avatar: AvatarList) => {
  const avatarRarity = getItemRarity(avatar.parts);

  const AvatarBasicOption = avatar.option.basic ? (
    <>
      <p>기본 효과</p>
      <EquipmentPartWrapper>
        <p>
          {avatar.option.basic.name} +{avatar.option.basic.value}
        </p>
      </EquipmentPartWrapper>
    </>
  ) : null;

  const AvatarTendencyOption = Object.values(avatar.option.tendency).map(
    ({ name, value }, index) => {
      return (
        <span key={index}>
          {name}: {value}
        </span>
      );
    }
  );

  return (
    <EquipmentOverlayBlock set={false}>
      <EquipmentOverlayFirstGrid>
        <AvatarOverlayImage
          src={`https://cdn-lostark.game.onstove.com/${avatar.image}`}
          tier={avatarRarity}
        />
        <EquipmentOverlayFirstGridR>
          <EquipmentName rarity={avatarRarity}>{avatar.name}</EquipmentName>
          <EquipmentPart rarity={avatarRarity}>{avatar.parts}</EquipmentPart>
        </EquipmentOverlayFirstGridR>
      </EquipmentOverlayFirstGrid>
      <EquipmentSecondGrid>
        <EquipmentPartBox>
          {avatar.option.basic ? AvatarBasicOption : null}
        </EquipmentPartBox>
        <AvatarTendencyBox>
          <p>성향</p>
          <AvatarTendencyWrapper>{AvatarTendencyOption}</AvatarTendencyWrapper>
        </AvatarTendencyBox>
      </EquipmentSecondGrid>
    </EquipmentOverlayBlock>
  );
};

export default AvatarOverlay;
