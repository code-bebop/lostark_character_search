import { useState } from "react";
import styled from "styled-components";
import getItemRarity from "../../../lib/getItemRarity";
import { JewelResponse } from "../../../type/jewel";
import ItemImage from "../../Common/ItemImage";
import {
  EquipmentBlock,
  EquipmentCategory,
  EquipmentImageWrapper,
} from "../Equipment/EquipmentList";
import JewelOverlay from "./JewelOverlay";

const JewelListBlock = styled(EquipmentBlock)`
  margin: 0;
  justify-content: center;
`;

export const JewelImage = styled(ItemImage)`
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

const JewelList = (data: JewelResponse) => {
  const [showOverlay, setShowOverlay] = useState(
    Array.from({ length: data.jewelList.length }, () => false)
  );

  return (
    <>
      {data.jewelList.map((jewel, index) => {
        const { name, grade, image } = jewel;
        const rarity = getItemRarity(grade);

        if (!name) {
          return (
            <JewelListBlock key={index}>
              <EquipmentImageWrapper>
                <JewelImage rarity={rarity} />
                {showOverlay[index] && <JewelOverlay {...jewel} />}
              </EquipmentImageWrapper>
              <JewelName>
                <EquipmentCategory>없음</EquipmentCategory>
              </JewelName>
            </JewelListBlock>
          );
        }

        return (
          <JewelListBlock key={index}>
            <EquipmentImageWrapper>
              <JewelImage
                src={`https://cdn-lostark.game.onstove.com/${image}`}
                rarity={rarity}
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
              {showOverlay[index] && <JewelOverlay {...jewel} />}
            </EquipmentImageWrapper>
            <JewelName>
              <EquipmentCategory>
                {name.match(/(홍염)|(멸화)/g)}
              </EquipmentCategory>
              <EquipmentCategory>{name.split(" ")[0]}</EquipmentCategory>
            </JewelName>
          </JewelListBlock>
        );
      })}
    </>
  );
};

export default JewelList;
