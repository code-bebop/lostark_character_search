import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import useAllProfileCache from "../hooks/useAllProfileCache";
import CharacterOverView from "./Common/CharacterOverview";
import CharacterSearchBar from "./Common/ChracterSearchBar";
import TabMenu from "./Common/TabMenu";
import Footer from "./Footer";

import backgroundImage from "/assets/bg_effect.png";

const ProfileBlock = styled.div`
  background-color: ${({ theme }) => theme.mainTheme.color.black};
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
`;

const Background = styled.div`
  width: 1080px;
  min-height: 1000px;
  padding-bottom: 70px;
  margin: auto;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
`;

const Profile = () => {
  const location = useLocation();
  const { nickname } = location.state as { nickname: string };

  useAllProfileCache(nickname);

  return (
    <ProfileBlock>
      <Background>
        <CharacterSearchBar />
        <CharacterOverView />
        <TabMenu />
        <Outlet />
      </Background>
      <Footer />
    </ProfileBlock>
  );
};

export default Profile;
