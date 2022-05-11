import styled from "styled-components";
import getItemRarity from "../../../lib/getItemRarity";
import { AvatarResponse } from "../../../type/avatar";
import ItemImage from "../../Common/ItemImage";
import {
  EquipmentBlock,
  EquipmentCategory,
  EquipmentCategoryWrapper,
  EquipmentName,
} from "../Equipment/EquipmentList";

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
              <AvatarImage tier={avatarRarity} />
              <EquipmentName tier={avatarRarity}>없음</EquipmentName>
            </AvatarBlock>
          );
        }
        return (
          <AvatarBlock key={index}>
            <AvatarCategoryWrapper>
              <AvatarCategory>{AvatarPartsList[index]}</AvatarCategory>
            </AvatarCategoryWrapper>
            <AvatarImage
              src={
                avatar.image
                  ? `https://cdn-lostark.game.onstove.com/${avatar.image}`
                  : ""
              }
              tier={avatarRarity}
            />
            <EquipmentName tier={avatarRarity}>{avatar.name}</EquipmentName>
          </AvatarBlock>
        );
      })}
    </>
  );
};

export default AvatarList;
