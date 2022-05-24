import React from "react";
import Loading from "./Loading";
import Coins from "./Coins";

import { useGlobalContext } from "../context";
function CoinList() {
  const { loading, coins } = useGlobalContext();
  // console.log(coins)
  if (loading) {
    return <Loading />;
  }
  if (coins.length < 1) {
    return (
      <h2 className="error-heading">
        Oops! No Coin matched your criteria. Please refresh!
      </h2>
    );
  }

  return (
    <section className="section">
      <table className="table">
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price (₹)</th>
            <th>Change Percentage (%)</th>
            <th>Market Cap (₹)</th>
            <th>Details</th>
          </tr>

          {coins.map((coin) => {
            const {
              id,
              symbol,
              name,
              image,
              current_price,
              price_change_percentage_24h,
              market_cap,
              market_cap_rank,
            } = coin;
            return <Coins key={coin.id} {...coin} />;
          })}
        </tbody>
      </table>
    </section>
  );
}

export default CoinList;
