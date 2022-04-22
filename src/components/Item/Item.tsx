import { Outlet } from "react-router-dom";
import ItemCategory from "./ItemCategory";

const Item = () => {
  return (
    <>
      <ItemCategory />
      <Outlet />
    </>
  );
};

export default Item;
