export const CoinList = (currency) =>
  `https://66a002cb7ad90f048a98.appwrite.global/coinList/${currency}`;

export const SingleCoin = (id) =>
  `https://66a002cb7ad90f048a98.appwrite.global/singleCoin/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://66a002cb7ad90f048a98.appwrite.global/historicalChart/${id}/${currency}/${days}`;

export const TrendingCoins = (currency) =>
  `https://66a002cb7ad90f048a98.appwrite.global/trendingCoins/${currency}`;
