import styled from "styled-components";

import getItemRarity from "../../../lib/getItemRarity";
import { AvatarList } from "../../../type/avatar";
import ItemImage from "../../Common/ItemImage";
import {
  ItemOverlayBlock,
  ItemOverlayFirstGrid,
  ItemOverlayFirstGridR,
  ItemOverlayName,
  ItemOverlayOptionBox,
  ItemOverlayOptionWrapper,
  ItemOverlayPart,
  ItemOverlaySecondGrid,
} from "../../Common/ItemOverlayBlock";

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

const AvatarTendencyBox = styled(ItemOverlayOptionBox)`
  & > p {
    margin-bottom: 10px;
  }
`;

const AvatarOverlay = (avatar: AvatarList) => {
  const avatarRarity = getItemRarity(avatar.parts);

  const AvatarBasicOption = avatar.option.basic ? (
    <>
      <p>기본 효과</p>
      <ItemOverlayOptionWrapper>
        <p>
          {avatar.option.basic.name} +{avatar.option.basic.value}
        </p>
      </ItemOverlayOptionWrapper>
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
    <ItemOverlayBlock set={false}>
      <ItemOverlayFirstGrid>
        <AvatarOverlayImage
          src={`https://cdn-lostark.game.onstove.com/${avatar.image}`}
          rarity={avatarRarity}
        />
        <ItemOverlayFirstGridR>
          <ItemOverlayName rarity={avatarRarity}>{avatar.name}</ItemOverlayName>
          <ItemOverlayPart rarity={avatarRarity}>
            {avatar.parts}
          </ItemOverlayPart>
        </ItemOverlayFirstGridR>
      </ItemOverlayFirstGrid>
      <ItemOverlaySecondGrid>
        <ItemOverlayOptionBox>
          {avatar.option.basic ? AvatarBasicOption : null}
        </ItemOverlayOptionBox>
        <AvatarTendencyBox>
          <p>성향</p>
          <AvatarTendencyWrapper>{AvatarTendencyOption}</AvatarTendencyWrapper>
        </AvatarTendencyBox>
      </ItemOverlaySecondGrid>
    </ItemOverlayBlock>
  );
};

export default AvatarOverlay;
