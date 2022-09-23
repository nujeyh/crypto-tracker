import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>&copy; 2022 Hyejun</div>
      <div>
        <a href="https://github.com/nujeyh/crypto-tracker">
          GO to GitHub &rarr;
        </a>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  text-align: center;
  margin: auto;
  padding-bottom: 30px;
  max-width: ${(props) => props.theme.maxWidth};
  color: ${(props) => props.theme.textSubColor};
  div {
    margin-bottom: 10px;
  }
  a {
    color: ${(props) => props.theme.textMainColor};
  }
`;

export default Footer;
