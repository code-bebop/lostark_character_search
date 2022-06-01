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

const EquipmentBlockSkeleton = styled.div`
  height: 108px;
  background-color: ${({ theme }) => theme.mainTheme.color.skeleton.background};
  border-radius: 10px;
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const EquipmentCategorySkeleton = styled.p`
  width: 9%;
  height: 20px;
  background-color: ${({ theme }) => theme.mainTheme.color.skeleton.content};
  border-radius: 10px;
  margin-left: 22px;
  animation: ${loading} 1s infinite alternate linear;
`;

const EquipmentImageSkeleton = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.mainTheme.color.skeleton.content};
  border-radius: 10px;
  margin-left: 60px;
  animation: ${loading} 1s infinite alternate linear;
`;

const EquipmentTitleSkeleton = styled.p`
  width: 29%;
  height: 20px;
  margin-left: 90px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainTheme.color.skeleton.content};
  animation: ${loading} 1s infinite alternate linear;
`;

const EquipmentEngraveSkeleton = styled.p`
  height: 16px;
  margin-left: 85px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainTheme.color.skeleton.content};
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
    <EquipmentBlockSkeleton>
      <EquipmentCategorySkeleton />
      <EquipmentImageSkeleton />
      <EquipmentTitleSkeleton />
      <div>
        <EquipmentEngraveSkeleton />
        <EquipmentEngraveSkeleton />
        <EquipmentEngraveSkeleton />
      </div>
    </EquipmentBlockSkeleton>
  );
};

export default EquipmentSkeleton;
