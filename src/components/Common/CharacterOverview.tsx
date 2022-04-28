import styled from "styled-components";

const CharacterOverViewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 150px;
  background-color: #141a36;
`;

const CharacterInfo = styled.div`
  font: ${({ theme }) => theme.mainTheme.font.lead};
`;

const CharacterLevelList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const CharacterLevelItem = styled.li`
  list-style: none;
  text-align: center;
  font: ${({ theme }) => theme.mainTheme.font.body};
`;

const CharacterOverView = () => {
  return (
    <CharacterOverViewBlock>
      <CharacterInfo>아만 / 아르카나 / 모코코볼따구빠는소리</CharacterInfo>
      <CharacterLevelList>
        <CharacterLevelItem>
          <p>원정대 레벨</p>
          <p>Lv. 116</p>
        </CharacterLevelItem>
        <CharacterLevelItem>
          <p>원정대 레벨</p>
          <p>Lv. 116</p>
        </CharacterLevelItem>
        <CharacterLevelItem>
          <p>원정대 레벨</p>
          <p>Lv. 116</p>
        </CharacterLevelItem>
        <CharacterLevelItem>
          <p>원정대 레벨</p>
          <p>Lv. 116</p>
        </CharacterLevelItem>
      </CharacterLevelList>
    </CharacterOverViewBlock>
  );
};

export default CharacterOverView;
