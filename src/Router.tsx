import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import AnotherCharacter from "./components/AnotherCharacter/AnotherCharacter";
import Home from "./components/Home";
import Avatar from "./components/Item/Avatar/Avatar";
import Card from "./components/Item/Card/Card";
import Equipment from "./components/Item/Equipment/Equipment";
import Item from "./components/Item/Item";
import Jewel from "./components/Item/Jewel/Jewel";
import Profile from "./components/Profile";
import Skill from "./components/Skill/Skill";
import { NicknameProvider } from "./context/nickname";

const Router = () => {
  return (
    <NicknameProvider>
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
    </NicknameProvider>
  );
};

export default Router;
