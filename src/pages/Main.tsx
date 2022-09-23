import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { fetchCoins } from "../api";

interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Main = () => {
  const { isLoading, data } = useQuery<ICoinData[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>CrypT</title>
      </Helmet>
      {/* <Header>
        <Title>CRYPTO TRACKER</Title>
      </Header> */}
      {isLoading ? (
        "loading"
      ) : (
        <ul>
          {data?.slice(0, 100).map((coin) => (
            <Link to={`/${coin.id}`} key={coin.id}>
              <ListElement key={coin.id}>
                <Icon
                  alt="logo"
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                <Rank>{coin.rank}</Rank>
                {coin.name}
                <span>&rarr;</span>
              </ListElement>
            </Link>
          ))}
        </ul>
      )}
    </Container>
  );
};

const Container = styled.main`
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
  padding: 100px 10px;
`;
const Header = styled.header`
  height: 10vh;
`;
const Title = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontXL};
  color: ${(props) => props.theme.mainColor};
`;
const ListElement = styled.li`
  background-color: ${(props) => props.theme.backgroundSubColor};
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: #494949;
    transition: all 0.2s ease-in;
  }
  span {
    margin-left: auto;
  }
`;
const Icon = styled.img`
  height: 30px;
  margin-right: 10px;
`;
const Rank = styled.div`
  color: ${(props) => props.theme.mainColor};
  margin-right: 8px;
`;

export default Main;
