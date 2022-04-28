import { Outlet } from "react-router-dom";
import CharacterOverView from "./Common/CharacterOverview";
import TabMenu from "./Common/TabMenu";

const Profile = () => {
  return (
    <>
      <CharacterOverView />
      <TabMenu />
      <Outlet />
    </>
  );
};

export default Profile;
