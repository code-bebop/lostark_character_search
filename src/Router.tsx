import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import AnotherCharacter from "./components/AnotherCharacter/AnotherCharacter";
import Home from "./components/Home";
import Avatar from "./components/Item/Avatar";
import Card from "./components/Item/Card";
import Equipment from "./components/Item/Equipment";
import Item from "./components/Item/Item";
import Jewel from "./components/Item/Jewel";
import Profile from "./components/Profile";
import Skill from "./components/Skill/Skill";

const Background = styled.div`
  width: 1080px;
  height: 100vh;
  margin: auto;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
`;

const Router = () => {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path="item" element={<Item />}>
            <Route path="equipment" element={<Equipment />} />
            <Route path="avatar" element={<Avatar />} />
            <Route path="jewel" element={<Jewel />} />
            <Route path="card" element={<Card />} />
          </Route>
          <Route path="skill" element={<Skill />} />
          <Route path="anotherCharacter" element={<AnotherCharacter />} />
        </Route>
      </Routes>
    </Background>
  );
};

export default Router;
