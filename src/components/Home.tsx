import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useNicknameDispatch } from "../context/nickname";

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.mainTheme.color.white};
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Input = styled.input`
  width: 30.1562vw;
  color: #000;
  outline: none;
  border-width: 3px;
  border-color: transparent;
  border-radius: 5px;
  padding: 20px 0 20px 20px;
  font: ${({ theme }) => theme.mainTheme.font.lead};
  &:focus {
    outline: 3px solid ${({ theme }) => theme.mainTheme.color.sub};
    box-shadow: 0 0 40px 1px ${({ theme }) => theme.mainTheme.color.sub};
  }
`;

const Home = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const dispatch = useNicknameDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "NICKNAME/UPDATE", payload: nickname });
    navigate("/profile/item/equipment", { state: { nickname } });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <HomeBlock>
      <Title>로스트아크 캐릭터 정보 검색 웹</Title>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="여기에 닉네임을 입력"
          onChange={onChange}
          value={nickname}
        />
      </form>
    </HomeBlock>
  );
};

export default Home;
