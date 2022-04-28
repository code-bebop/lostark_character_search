import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNicknameState } from "../../context/nickname";

const TabMenuLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
  height: 110px;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.sub};
  border-top: none;
  border-bottom: 2px solid ${({ theme }) => theme.mainTheme.color.sub};
  font: ${({ theme }) => theme.mainTheme.font.lead_24px};

  :not(:nth-child(1)) {
    border-left: none;
  }
  :hover {
    background-color: ${({ theme }) => theme.mainTheme.color.sub};
  }
`;

const TabMenuBlock = styled.div`
  display: flex;
`;

const TabMenu = () => {
  const { nickname } = useNicknameState();

  return (
    <TabMenuBlock>
      <TabMenuLink to="/profile/item/equipment" state={{ nickname }}>
        아이템
      </TabMenuLink>
      <TabMenuLink to="/profile/skill" state={{ nickname }}>
        스킬
      </TabMenuLink>
      <TabMenuLink to="/profile/anotherCharacter" state={{ nickname }}>
        다른 캐릭터
      </TabMenuLink>
    </TabMenuBlock>
  );
};

export default TabMenu;
