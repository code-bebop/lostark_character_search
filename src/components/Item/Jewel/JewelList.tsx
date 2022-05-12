import styled from "styled-components";
import getItemRarity from "../../../lib/getItemRarity";
import { JewelListT } from "../../../type/jewel";
import ItemImage from "../../Common/ItemImage";
import {
  EquipmentBlock,
  EquipmentCategory,
  EquipmentImageWrapper,
} from "../Equipment/EquipmentList";

const JewelListBlock = styled(EquipmentBlock)`
  margin: 0;
  justify-content: center;
`;

const JewelImage = styled(ItemImage)`
  margin-left: 0;
  margin-right: 25px;
`;

const JewelName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const JewelList = ({ name, grade, tier, effect, image }: JewelListT) => {
  const rarity = getItemRarity(grade);

  return (
    <JewelListBlock>
      <EquipmentImageWrapper>
        <JewelImage
          src={`https://cdn-lostark.game.onstove.com/${image}`}
          tier={rarity}
        />
      </EquipmentImageWrapper>
      <JewelName>
        <EquipmentCategory>{name.match(/(홍염)|(멸화)/g)}</EquipmentCategory>
        <EquipmentCategory>{name.split(" ")[0]}</EquipmentCategory>
      </JewelName>
    </JewelListBlock>
  );
};

export default JewelList;
