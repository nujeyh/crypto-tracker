import { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const Detail = () => {
  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const [info, setInfo] = useState<IInfoData>();
  const [price, setPrice] = useState<IPriceData>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPrice(priceData);
    })();
  }, [coinId]);

  return (
    <Container>
      <Image src={info?.logo} alt="coin logo" />
      <TitleWrap>
        <Rank>{info?.rank}</Rank>
        <Title>{info?.name}</Title>
      </TitleWrap>
      <InfoBox>
        <div>
          <h2>Started At</h2>
          <div>{info?.started_at ?? "Data Not Found."}</div>
        </div>
        <div>
          <h2>Symbol</h2>
          <div>{info?.symbol}</div>
        </div>
      </InfoBox>
      <Description>{info?.description}</Description>
      <InfoBox>
        <div>
          <h2>Max Supply</h2>
          <div>
            {price?.max_supply === 0 ? "Data Not Found." : price?.max_supply}
          </div>
        </div>
        <div>
          <h2>Total Supply</h2>
          <div>{price?.total_supply}</div>
        </div>
      </InfoBox>
      <Tabs>
        <Link to={`/${coinId}/price`}>
          <Tab isActive={priceMatch !== null}>Price</Tab>
        </Link>
        <Link to={`/${coinId}/chart`}>
          <Tab isActive={chartMatch !== null}>Chart</Tab>
        </Link>
      </Tabs>
      <Outlet />
    </Container>
  );
};

const Container = styled.main`
  max-width: 700px;
  margin: auto;
`;
const Image = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  margin: auto;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: fit-content;
  margin: auto;
`;
const Rank = styled.div`
  display: inline-block;
  border-radius: 100px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
  font-size: ${(props) => props.theme.fontXL};
`;
const Title = styled.h1`
  display: inline;
  font-size: ${(props) => props.theme.fontXL};
`;
const InfoBox = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 15px 20px;
  justify-content: space-between;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundSubColor};
  h2 {
    font-size: ${(props) => props.theme.fontS};
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.textSubColor};
`;
const Tabs = styled.div`
  display: flex;
  border-bottom: solid 2px ${(props) => props.theme.mainColor};
  gap: 20px;
`;
const Tab = styled.div<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.mainColor : props.theme.textSubColor};
  font-size: ${(props) => props.theme.fontL};
`;

export default Detail;
