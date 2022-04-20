import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import Avatar from "./components/Item/Avatar";
import Card from "./components/Item/Card";
import Equipment from "./components/Item/Equipment";
import Item from "./components/Item/Item";
import Jewel from "./components/Item/Jewel";

const Background = styled.div`
  width: 1280px;
  height: 100vh;
  margin: auto;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
`;

const Router = () => {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item" element={<Item />}>
          <Route path="equipment" element={<Equipment />} />
          <Route path="avatar" element={<Avatar />} />
          <Route path="jewel" element={<Jewel />} />
          <Route path="card" element={<Card />} />
        </Route>
      </Routes>
    </Background>
  );
};

export default Router;
