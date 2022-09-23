import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Title>
        <Link to="/">CRYPT</Link>
      </Title>
    </Container>
  );
};

const Container = styled.nav`
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(20px);
  display: flex;
`;
const Title = styled.div`
  margin: auto;
  color: ${(props) => props.theme.mainColor};
  font-size: ${(props) => props.theme.fontL};
  max-width: ${(props) => props.theme.maxWidth};
`;

export default Header;
