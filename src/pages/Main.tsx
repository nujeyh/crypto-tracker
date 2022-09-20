import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  const [coins, setCoins] = useState<ICoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>COIN TRACKER</Title>
      </Header>
      {loading ? (
        "loading"
      ) : (
        <ul>
          {coins.map((coin) => (
            <Link to={`/${coin.id}`} key={coin.id}>
              <ListElement key={coin.id}>
                <Icon
                  alt="coin icon"
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </ListElement>
            </Link>
          ))}
        </ul>
      )}
    </Container>
  );
};

const Container = styled.main`
  max-width: 700px;
  margin: auto;
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
    transition: color 0.2s ease-in;
  }
`;
const Icon = styled.img`
  height: 30px;
  margin-right: 10px;
`;

export default Main;
