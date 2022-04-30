import { Outlet } from "react-router-dom";
import CharacterOverView from "./Common/CharacterOverview";
import CharacterSearchBar from "./Common/ChracterSearchBar";
import TabMenu from "./Common/TabMenu";

const Profile = () => {
  return (
    <>
      <CharacterSearchBar />
      <CharacterOverView />
      <TabMenu />
      <Outlet />
    </>
  );
};

export default Profile;
