import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";

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
      </Routes>
    </Background>
  );
};

export default Router;
