import styled from "styled-components";
import { EquipmentEngraves } from "../../../hooks/useEquipmentEngraves";

const EquipmentEngraveOverviewBlock = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 50px;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
`;

const EquipmentEngraveOverviewTitle = styled.div`
  padding: 23px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  font: ${({ theme }) => theme.mainTheme.font.lead};
`;

const EquipmentEngraveOverviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 35px 40px 0;
`;

const EquipmentEngraveOverviewItem = styled.li<{ isReduced: boolean }>`
  display: flex;
  list-style: none;
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
  font-weight: 600;
  width: calc(100% / 5);
  line-height: 1.8em;
  p:first-child {
    width: 65%;
    color: ${({ isReduced }) => (isReduced ? `red` : `yellow`)};
  }
`;

const EquipmentEnvgraveOverview = (equipmentEngraves: EquipmentEngraves) => {
  const _EquipmentEnvgraveOverview = (
    <EquipmentEngraveOverviewBlock>
      <EquipmentEngraveOverviewTitle>
        <p>각인 활성도</p>
      </EquipmentEngraveOverviewTitle>
      <EquipmentEngraveOverviewList>
        {Object.keys(equipmentEngraves).map((engraveName, index) => {
          const { level, isReduced } = equipmentEngraves[engraveName];
          return (
            <EquipmentEngraveOverviewItem key={index} isReduced={isReduced}>
              <p>{engraveName.split("활성도")[0]}</p>
              <p>+{level}</p>
            </EquipmentEngraveOverviewItem>
          );
        })}
      </EquipmentEngraveOverviewList>
    </EquipmentEngraveOverviewBlock>
  );

  return _EquipmentEnvgraveOverview;
};

export default EquipmentEnvgraveOverview;
