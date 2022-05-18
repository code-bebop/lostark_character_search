import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNicknameDispatch } from "../../context/nickname";
import { AnotherResponse } from "../../type/another";

const AnotherCharacterListBlock = styled.div``;

const CharacterListTitleBlock = styled.div`
  padding: 30px 38px;
  border-bottom: 1px solid ${({ theme }) => theme.mainTheme.color.white};
`;

const CharacterListTitle = styled.h2`
  font: ${({ theme }) => theme.mainTheme.font.lead};
`;

const ServerCharacterBlock = styled.div`
  padding: 0 30px;
`;

const CharacterServerBlock = styled.div`
  margin-top: 50px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  margin-bottom: 30px;
`;

const CharacterServer = styled.h3`
  font: ${({ theme }) => theme.mainTheme.font.lead};
`;

const CharacterListBlock = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 30px;
`;

const CharacterListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  border: 1px solid ${({ theme }) => theme.mainTheme.color.white};
  border-radius: 10px;
  padding: 22px 0 22px 30px;

  &:hover {
    outline: 3px solid ${({ theme }) => theme.mainTheme.color.sub};
    box-shadow: 0 0 20px 1px ${({ theme }) => theme.mainTheme.color.sub};
  }
`;

const CharacterName = styled.p`
  font: bold 16px Inter;
`;

const CharacterLevel = styled.p`
  color: yellow;
`;

const AnotherCharacterList = (data: AnotherResponse) => {
  const dispatch = useNicknameDispatch();

  const getServerList = () => {
    const serverList: string[] = [];

    data.anotherCharacterList.forEach((character) => {
      serverList.push(character.server);
    });

    const _serverList = serverList.filter((v, i) => {
      return serverList.indexOf(v) === i;
    });

    return _serverList;
  };

  const serverList = getServerList();

  const CharacterList = (
    <ServerCharacterBlock>
      {serverList.map((server, index) => {
        return (
          <div key={index}>
            <CharacterServerBlock>
              <CharacterServer>{server}</CharacterServer>
            </CharacterServerBlock>

            <CharacterListBlock>
              {data.anotherCharacterList.map((character, index) => {
                return character.server === server ? (
                  <Link
                    to={`/profile/item/equipment`}
                    state={{ nickname: character.name }}
                    onClick={() => {
                      dispatch({
                        type: "NICKNAME/UPDATE",
                        payload: character.name,
                      });
                    }}
                    key={index}
                  >
                    <CharacterListItem>
                      <p>{character._class}</p>
                      <CharacterName>{character.name}</CharacterName>
                      <CharacterLevel>{character.level}</CharacterLevel>
                    </CharacterListItem>
                  </Link>
                ) : null;
              })}
            </CharacterListBlock>
          </div>
        );
      })}
    </ServerCharacterBlock>
  );

  return (
    <AnotherCharacterListBlock>
      <CharacterListTitleBlock>
        <CharacterListTitle>보유 캐릭터</CharacterListTitle>
      </CharacterListTitleBlock>
      {CharacterList}
    </AnotherCharacterListBlock>
  );
};

export default AnotherCharacterList;
