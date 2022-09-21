import styled from "styled-components";

const NavigationBar = () => {
  return <Container>CRYPTO TRACKER</Container>;
};

const Container = styled.nav`
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(10px);
`;

export default NavigationBar;
