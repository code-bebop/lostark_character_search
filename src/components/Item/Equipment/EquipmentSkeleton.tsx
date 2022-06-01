import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    background-color: #272535;
  }
  50%,
  100% {
    background-color: #2E2B3F;
  }
`;

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

const EquipmentSkeletonCategory = styled.p`
  width: 9%;
  height: 20px;
  background-color: #272535;
  border-radius: 10px;
  margin-left: 22px;
  animation: ${loading} 1s infinite alternate linear;
`;

const EquipmentSkeletonImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: #272535;
  border-radius: 10px;
  margin-left: 60px;
  animation: ${loading} 1s infinite alternate linear;
`;

const EquipmentSkeletonTitle = styled.p`
  width: 29%;
  height: 20px;
  margin-left: 90px;
  border-radius: 10px;
  background-color: #272535;
  animation: ${loading} 1s infinite alternate linear;
`;

const EquipmentSkeletonEngrave = styled.p`
  height: 16px;
  margin-left: 85px;
  border-radius: 10px;
  background-color: #272535;
  animation: ${loading} 1s infinite alternate linear;
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
      <EquipmentSkeletonCategory />
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
