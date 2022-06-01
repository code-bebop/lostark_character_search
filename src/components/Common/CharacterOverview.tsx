import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { InfoResponse } from "../../type/info";

const loading = keyframes`
  0% {
    background-color: #272535;
  }
  50%,
  100% {
    background-color: #2E2B3F;
  }
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  font: ${({ theme }) => theme.mainTheme.font.body};
`;

const CharacterInfoSkeleton = styled.p`
  width: 320px;
  height: 26px;
  background-color: #272535;
  border-radius: 10px;
  animation: ${loading} 1s infinite alternate linear;
`;

const CharacterLevelTitleSkeleton = styled.p`
  width: 77px;
  height: 19px;
  background-color: #272535;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  animation: ${loading} 1s infinite alternate linear;
`;

const CharacterLevelContentSkeleton = styled(CharacterLevelTitleSkeleton)`
  width: 52px;
  margin-top: 10px;
`;

const CharacterLevelTitleSkeleton_2 = styled(CharacterLevelTitleSkeleton)`
  width: 107px;
`;

const CharacterLevelContentSkeleton_2 = styled(CharacterLevelContentSkeleton)`
  width: 75px;
`;

const CharacterOverviewSkeleton = () => {
  return (
    <CharacterOverViewBlock>
      <CharacterInfoSkeleton />
      <CharacterLevelList>
        <CharacterLevelItem>
          <CharacterLevelTitleSkeleton />
          <CharacterLevelContentSkeleton />
        </CharacterLevelItem>
        <CharacterLevelItem>
          <CharacterLevelTitleSkeleton />
          <CharacterLevelContentSkeleton />
        </CharacterLevelItem>
        <CharacterLevelItem>
          <CharacterLevelTitleSkeleton_2 />
          <CharacterLevelContentSkeleton_2 />
        </CharacterLevelItem>
        <CharacterLevelItem>
          <CharacterLevelTitleSkeleton_2 />
          <CharacterLevelContentSkeleton_2 />
        </CharacterLevelItem>
      </CharacterLevelList>
    </CharacterOverViewBlock>
  );
};

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
    return <CharacterOverviewSkeleton />;
  }
  if (typeof data === "undefined") {
    return <p>데이터가 undefined인 상태입니다.</p>;
  }
  if (isError || data.result === "Error") {
    return (
      <CharacterOverViewBlock>
        <p>{data.result_error}</p>
      </CharacterOverViewBlock>
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
