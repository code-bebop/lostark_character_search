import { useState } from "react";
import styled from "styled-components";
import getItemRarity from "../../../lib/getItemRarity";
import { AvatarResponse } from "../../../type/avatar";
import ItemImage from "../../Common/ItemImage";
import {
  EquipmentBlock,
  EquipmentCategory,
  EquipmentCategoryWrapper,
  EquipmentImageWrapper,
  EquipmentName,
} from "../Equipment/EquipmentList";
import AvatarOverlay from "./AvatarOverlay";

const AvatarBlock = styled(EquipmentBlock)``;

const AvatarCategory = styled(EquipmentCategory)``;

const AvatarCategoryWrapper = styled(EquipmentCategoryWrapper)``;

const AvatarImage = styled(ItemImage)``;

const AvatarPartsList = [
  "무기",
  "덧입기",
  "머리",
  "덧입기",
  "상의",
  "덧입기",
  "하의",
  "덧입기",
  "얼굴 1",
  "얼굴 2",
  "악기",
];

const AvatarList = (data: AvatarResponse) => {
  const [showOverlay, setShowOverlay] = useState(
    Array.from({ length: AvatarPartsList.length }, () => false)
  );

  return (
    <>
      {data.avatarList.map((avatar, index) => {
        const avatarRarity = getItemRarity(avatar.parts);

        if (!avatar.name) {
          return (
            <AvatarBlock key={index}>
              <AvatarCategoryWrapper>
                <AvatarCategory>{AvatarPartsList[index]}</AvatarCategory>
              </AvatarCategoryWrapper>
              <AvatarImage rarity={avatarRarity} />
              <EquipmentName rarity={avatarRarity}>없음</EquipmentName>
            </AvatarBlock>
          );
        }
        return (
          <AvatarBlock key={index}>
            <AvatarCategoryWrapper>
              <AvatarCategory>{AvatarPartsList[index]}</AvatarCategory>
            </AvatarCategoryWrapper>
            <EquipmentImageWrapper>
              <AvatarImage
                src={
                  avatar.image
                    ? `https://cdn-lostark.game.onstove.com/${avatar.image}`
                    : ""
                }
                rarity={avatarRarity}
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
              {showOverlay[index] && <AvatarOverlay {...avatar} />}
            </EquipmentImageWrapper>

            <EquipmentName rarity={avatarRarity}>{avatar.name}</EquipmentName>
          </AvatarBlock>
        );
      })}
    </>
  );
};

export default AvatarList;
