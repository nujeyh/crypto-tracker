import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { MdDarkMode, MdLightMode, MdHome } from "react-icons/md";
import { Link, useMatch } from "react-router-dom";

const Float = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const isHome = useMatch("/");

  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
  };

  return (
    <Container>
      {!isHome && (
        <Link to="/">
          <FloatBtn>
            <MdHome color={isDark ? "#d4d4d4" : "#262626"} />
          </FloatBtn>
        </Link>
      )}
      <FloatBtn onClick={toggleMode}>
        {isDark ? (
          <MdLightMode color="#fdcb6e" />
        ) : (
          <MdDarkMode color="#fdcb6e" />
        )}
      </FloatBtn>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FloatBtn = styled.button`
  border: none;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  font-size: 30px;
  padding-top: 6px;
  background-color: ${(props) => props.theme.backgroundSubColor};
  box-shadow: 0px 8px 10px 1px hsla(0, 0%, 0%, 0.14),
    0px 3px 14px 2px hsla(0, 0%, 0%, 0.12),
    0px 5px 5px -3px hsla(0, 0%, 0%, 0.2);
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: #494949;
    transition: all 0.2s ease-in;
  }
`;

export default Float;
