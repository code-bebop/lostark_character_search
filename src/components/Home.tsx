import styled from "styled-components";

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
  return (
    <HomeBlock>
      <Title>로스트아크 캐릭터 정보 검색 웹</Title>
      <Input type="text" placeholder="여기에 닉네임을 입력" />
    </HomeBlock>
  );
};

export default Home;
