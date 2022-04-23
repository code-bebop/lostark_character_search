import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemCategoryBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
`;

const ItemCategoryLink = styled(Link)`
  font: ${({ theme }) => theme.mainTheme.font.lead_24px};

  :not(:last-child) {
    :after {
      content: "";
      margin: 0 16px;
      border-left: 2px solid ${({ theme }) => theme.mainTheme.color.white};
    }
  }
`;

const ItemCategory = () => {
  return (
    <ItemCategoryBlock>
      <ItemCategoryLink to="/profile/item/equipment">장비</ItemCategoryLink>
      <ItemCategoryLink to="/profile/item/avatar">아바타</ItemCategoryLink>
      <ItemCategoryLink to="/profile/item/jewel">보석</ItemCategoryLink>
      <ItemCategoryLink to="/profile/item/card">카드</ItemCategoryLink>
    </ItemCategoryBlock>
  );
};

export default ItemCategory;
