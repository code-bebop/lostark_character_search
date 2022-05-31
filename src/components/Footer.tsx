import styled from "styled-components";

const FooterBlock = styled.footer`
  width: 1080px;
  margin: auto;
  margin-top: 100px;
  padding: 50px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: thick double ${({ theme }) => theme.mainTheme.color.white};
`;

const Copyright = styled.p`
  font: 100 16px "IBMPlexSansKR-ExtraLight";
`;

const Connect = styled.a`
  font: ${({ theme }) => theme.mainTheme.font.body};
  font-weight: 700;
  color: ${({ theme }) => theme.mainTheme.color.sub};

  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.mainTheme.color.sub};
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out 0.25s, box-shadow 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.mainTheme.color.white};
    box-shadow: inset 200px 0 0 0 ${({ theme }) => theme.mainTheme.color.sub};
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Copyright>(C) 2022. code-bebop</Copyright>
      <Connect
        href="https://code-bebop.github.io/real-portfolio/"
        target="_blank"
      >
        포트폴리오 사이트 &rarr;
      </Connect>
    </FooterBlock>
  );
};

export default Footer;
