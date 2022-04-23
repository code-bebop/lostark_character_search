import styled from "styled-components";

const EquipmentBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  height: 108px;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
`;

const EquipmentCategory = styled.div`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  margin-left: 32px;
  margin-right: 60px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    top: 50%;
    right: -60%;
    transform: translateY(-50%);
    height: 80px;
    border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  }
`;

const EquipmentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 80px;
`;

const EquipmentImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: orange;
`;

const EquipmentName = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.lead};
  color: ${({ theme }) => theme.mainTheme.color.rarity.legendary};
`;

const EquipmentTripodList = styled.div``;

const EquipmentTripodItem = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body};
`;

const Equipment = () => {
  return (
    <EquipmentBlock>
      <EquipmentCategory>무기</EquipmentCategory>
      <EquipmentWrapper>
        <EquipmentImage />
        <EquipmentName>+15 예정된 결단의 머리장식</EquipmentName>
        <EquipmentTripodList>
          <EquipmentTripodItem>스트림 오브 엣지</EquipmentTripodItem>
          <EquipmentTripodItem>댄스 오브 스파인플라워</EquipmentTripodItem>
          <EquipmentTripodItem>포 카드</EquipmentTripodItem>
        </EquipmentTripodList>
      </EquipmentWrapper>
    </EquipmentBlock>
  );
};

export default Equipment;
