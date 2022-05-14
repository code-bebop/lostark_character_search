import styled from "styled-components";
import getItemRarity from "../../../lib/getItemRarity";
import { JewelListT } from "../../../type/jewel";
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

const JewelOverlayImage = styled(ItemImage)`
  margin: 0;
`;

const JewelOverlay = (jewel: JewelListT) => {
  const { name, grade, effect, tier, image } = jewel;
  const rarity = getItemRarity(grade);

  return (
    <ItemOverlayBlock set={false}>
      <ItemOverlayFirstGrid>
        <JewelOverlayImage
          src={`https://cdn-lostark.game.onstove.com/${image}`}
          rarity={rarity}
        />
        <ItemOverlayFirstGridR>
          <ItemOverlayName rarity={rarity}>{name}</ItemOverlayName>
          <ItemOverlayPart rarity={rarity}>{grade}</ItemOverlayPart>
          <ItemOverlayLevel>{tier}</ItemOverlayLevel>
        </ItemOverlayFirstGridR>
      </ItemOverlayFirstGrid>
      <ItemOverlaySecondGrid>
        <ItemOverlayOptionBox>
          <p>효과</p>
          <ItemOverlayOptionWrapper>
            <p>{effect}</p>
          </ItemOverlayOptionWrapper>
        </ItemOverlayOptionBox>
      </ItemOverlaySecondGrid>
    </ItemOverlayBlock>
  );
};

export default JewelOverlay;
