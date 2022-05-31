import { Outlet } from "react-router-dom";
import styled from "styled-components";
import CharacterOverView from "./Common/CharacterOverview";
import CharacterSearchBar from "./Common/ChracterSearchBar";
import TabMenu from "./Common/TabMenu";
import Footer from "./Footer";

const Background = styled.div`
  width: 1080px;
  min-height: 100vh;
  padding-bottom: 70px;
  margin: auto;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
`;

const Profile = () => {
  return (
    <>
      <Background>
        <CharacterSearchBar />
        <CharacterOverView />
        <TabMenu />
        <Outlet />
      </Background>
      <Footer />
    </>
  );
};

export default Profile;
