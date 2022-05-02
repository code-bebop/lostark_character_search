import styled from "styled-components";

const EquipmentOverlayBlock = styled.div`
  position: absolute;
  top: -50px;
  left: 90px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 45px 30px;
  width: 650px;
  height: auto;
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
`;

const EquipmentOverlayFirstGrid = styled.div`
  display: flex;
`;

const EquipmentOverlayFirstGridR = styled.div`
  margin-left: 25px;

  p:not(:first-child) {
    margin-top: 5px;
  }
`;

const EquipmentOverlayImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: #fff;
`;

const EquipmentName = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body};
  font-weight: bold;
  color: ${({ theme }) => theme.mainTheme.color.rarity.legendary};
`;

const EquipmentPart = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
  font-weight: bold;
  color: ${({ theme }) => theme.mainTheme.color.rarity.legendary};
`;

const EquipmentLevel = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;

const EquipmentQuality = styled.p`
  font: ${({ theme }) => theme.mainTheme.font.body_14px};
`;

const EquipmentSecondGrid = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const EquipmentPartBox = styled.div`
  &:not(:first-child) {
    margin-top: 10px;
  }

  p {
    font: ${({ theme }) => theme.mainTheme.font.body_14px};

    &:first-child {
      font-weight: bold;
    }

    &:not(:first-child) {
      margin-top: 5px;
    }
  }
`;

const EquipmentThirdGrid = styled.div`
  grid-row: 1/3;
`;

const EquipmentOverlay = () => {
  return (
    <EquipmentOverlayBlock>
      <EquipmentOverlayFirstGrid>
        <EquipmentOverlayImage />
        <EquipmentOverlayFirstGridR>
          <EquipmentName>+15 예정된 결단의 머리장식</EquipmentName>
          <EquipmentPart>전설 머리 방어구</EquipmentPart>
          <EquipmentLevel>아이템 레벨 1615 (티어 3)</EquipmentLevel>
          <EquipmentQuality>품질 100</EquipmentQuality>
        </EquipmentOverlayFirstGridR>
      </EquipmentOverlayFirstGrid>
      <EquipmentSecondGrid>
        <EquipmentPartBox>
          <p>기본 효과</p>
          <p>힘 5326 민첩 2445 지능 3345 체력 21354</p>
        </EquipmentPartBox>
        <EquipmentPartBox>
          <p>추가 효과</p>
          <p>체력 2000</p>
        </EquipmentPartBox>
        <EquipmentPartBox>
          <p>트라이포드 효과</p>
          <p>스트림 오브 엣지 [다크니스 엣지] 3</p>
          <p>포 카드 [신속한 준비] 3</p>
          <p>댄싱 오브 스파인플라워 [치명적인 꽃] 3</p>
        </EquipmentPartBox>
      </EquipmentSecondGrid>
      <EquipmentThirdGrid>
        <EquipmentPartBox>
          <p>선택 Lv.1</p>
          <p>결단</p>
        </EquipmentPartBox>
        <EquipmentPartBox>
          <p>2세트 효과</p>
          <p>[Lv. 1]</p>
          <p>
            적을 타격 시 2초 마다 6초 동안 '태양의 힘' 효과 획득 태양의 힘:
            치명타 적중률 3% 증가 (최대 5 중첩, '달의 힘'과 중복 적용되지 않음)
          </p>
        </EquipmentPartBox>
        <EquipmentPartBox>
          <p>5세트 효과</p>
          <p>[Lv. 2]</p>
          <p>
            '태양의 힘' 5 중첩 시 '중천' 효과로 변경된다.'중천' 효과 발동 중
            맹세 5세트로 발동되는 효과를 가지고 있는 파티원에게 3m 이내 접근 시
            '개기 일식' 효과 획득 중천: 15초 동안 치명타 적중률 25% 증가 개기
            일식: 15초 동안 치명타 적중률 25% 증가하며 치명타 피해가 50% 증가
            '태양의 힘' 5 중첩 시 '중천' 효과로 변경된다.'중천' 효과 발동 중
            맹세 5세트로 발동되는 효과를 가지고 있는 파티원에게 3m 이내 접근 시
            '개기 일식' 효과 획득 중천: 15초 동안 치명타 적중률 25% 증가 개기
            일식: 15초 동안 치명타 적중률 25% 증가하며 치명타 피해가 50% 증가
          </p>
        </EquipmentPartBox>
      </EquipmentThirdGrid>
    </EquipmentOverlayBlock>
  );
};

export default EquipmentOverlay;
