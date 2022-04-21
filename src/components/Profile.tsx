import { Outlet } from "react-router-dom";
import TabMenu from "./Common/TabMenu";

const Profile = () => {
  return (
    <>
      <TabMenu />
      <Outlet />
    </>
  );
};

export default Profile;
