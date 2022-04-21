import { Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <TabMenuBlock>
      <TabMenuLink to="/item/equipment">아이템</TabMenuLink>
      <TabMenuLink to="/skill">스킬</TabMenuLink>
      <TabMenuLink to="/anotherCharacter">다른 캐릭터</TabMenuLink>
    </TabMenuBlock>
  );
};

export default TabMenu;
