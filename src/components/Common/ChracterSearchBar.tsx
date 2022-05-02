import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useNicknameDispatch } from "../../context/nickname";

const CharacterSearchBlock = styled.div`
  height: 75px;
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

const CharacterSearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.mainTheme.color.default};
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 5px;
  outline: none;
  font: ${({ theme }) => theme.mainTheme.font.body};
`;

const CharacterSearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const { nickname: locationNickname } = location.state as {
      nickname: string;
    };
    setNickname(locationNickname);
  }, [location]);
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
    <CharacterSearchBlock>
      <form onSubmit={onSubmit}>
        <CharacterSearchInput
          type="text"
          onChange={onChange}
          value={nickname}
        />
      </form>
    </CharacterSearchBlock>
  );
};

export default CharacterSearchBar;
