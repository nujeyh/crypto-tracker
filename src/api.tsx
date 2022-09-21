const BASE_URL = "https://api.coinpaprika.com/v1";

// 모든 코인 목록 불러오기
export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

// 코인 개별 정보 불러오기
export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
};

// 코인 개별 가격 불러오기
export const fetchCoinPrice = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
};

// 코인 개별 가격 히스토리 불러오기
export const fetchCoinHistory = (coinId: string | undefined) => {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
};
