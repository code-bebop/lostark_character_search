import { Outlet } from "react-router-dom";
import TabMenu from "../Common/TabMenu";

const Item = () => {
  return (
    <>
      <TabMenu />
      <Outlet />
    </>
  );
};

export default Item;
