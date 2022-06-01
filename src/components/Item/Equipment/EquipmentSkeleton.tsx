import styled from "styled-components";

const EquipmentSkeletonBlock = styled.div`
  height: 108px;
  background-color: #100f2a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const EquipmentSkeletonImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: #272535;
  border-radius: 10px;
  margin-left: calc(11% + 60px);
`;

const EquipmentSkeletonTitle = styled.p`
  width: 29%;
  height: 20px;
  margin-left: 90px;
  border-radius: 10px;
  background-color: #272535;
`;

const EquipmentSkeletonEngrave = styled.p`
  height: 16px;
  margin-left: 85px;
  border-radius: 10px;
  background-color: #272535;
  &:nth-child(1) {
    width: 220px;
  }
  &:nth-child(2) {
    width: 200px;
  }
  &:nth-child(3) {
    width: 180px;
  }
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const EquipmentSkeleton = () => {
  return (
    <EquipmentSkeletonBlock>
      <EquipmentSkeletonImage />
      <EquipmentSkeletonTitle />
      <div>
        <EquipmentSkeletonEngrave />
        <EquipmentSkeletonEngrave />
        <EquipmentSkeletonEngrave />
      </div>
    </EquipmentSkeletonBlock>
  );
};

export default EquipmentSkeleton;
