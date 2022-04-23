import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ItemCategory from "./ItemCategory";

const ItemBlock = styled.div`
  margin: 0 72px;
`;

const Item = () => {
  return (
    <ItemBlock>
      <ItemCategory />
      <Outlet />
    </ItemBlock>
  );
};

export default Item;
