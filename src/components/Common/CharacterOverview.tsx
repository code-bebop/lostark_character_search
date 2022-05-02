import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNicknameState } from "../../context/nickname";
import { InfoResponse } from "../../type/info";

const CharacterOverViewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 150px;
  background-color: #141a36;
`;

const CharacterInfo = styled.div`
  font: ${({ theme }) => theme.mainTheme.font.lead};
`;

const CharacterLevelList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const CharacterLevelItem = styled.li`
  list-style: none;
  text-align: center;
  font: ${({ theme }) => theme.mainTheme.font.body};
`;

const CharacterOverView = () => {
  const location = useLocation();
  const { nickname: locationNickname } = location.state as { nickname: string };

  const { data, isLoading, isError } = useQuery<InfoResponse, AxiosError>(
    ["info", locationNickname],
    async () => {
      const res = await axios.get(
        `https://codebebop.xyz/lostark/profile/info?nickname=${locationNickname}`
      );

      return res.data;
    },
    {
      enabled: !!locationNickname,
      staleTime: 1000 * 60,
      cacheTime: Infinity,
    }
  );

  if (isLoading) {
    return <p>로딩 중 . . .</p>;
  }
  if (typeof data === "undefined") {
    return <p>데이터가 undefined인 상태입니다.</p>;
  }
  if (isError || data.result === "Error") {
    return (
      <>
        <p>에러 발생</p>
        <p>{data.result_error}</p>
      </>
    );
  }

  const { server, nickname, _class, level } = data.info;
  return (
    <CharacterOverViewBlock>
      <CharacterInfo>{` ${server} / ${_class} / ${nickname}`}</CharacterInfo>
      <CharacterLevelList>
        <CharacterLevelItem>
          <p>원정대 레벨</p>
          <p>{level.expedition}</p>
        </CharacterLevelItem>
        <CharacterLevelItem>
          <p>전투 레벨</p>
          <p>{level.battle}</p>
        </CharacterLevelItem>
        <CharacterLevelItem>
          <p>달성 아이템 레벨</p>
          <p>{level.gear.maxLevel}</p>
        </CharacterLevelItem>
        <CharacterLevelItem>
          <p>장착 아이템 레벨</p>
          <p>{level.gear.level}</p>
        </CharacterLevelItem>
      </CharacterLevelList>
    </CharacterOverViewBlock>
  );
};

export default CharacterOverView;
