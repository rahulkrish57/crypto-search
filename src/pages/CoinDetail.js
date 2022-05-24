import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
function CoinDetail() {
  const [coinDetail, setCoinDetail] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(coinDetail);
  const { id } = useParams();
  const fechCoin = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      if (data) {
        const coinData = data.find((coin) => {
          return coin.id == id;
        });
        setCoinDetail(coinData);
      }
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fechCoin();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className="body-section">
        <div className="body-content">
          <img src={coinDetail.image} className="coin-logo" alt="" />
          <p>
            <span className="span-heading">Name: </span>
            {coinDetail.name}
          </p>
          <p>
            <span className="span-heading">All Time High Change (%) </span>
            {coinDetail.ath_change_percentage >= 0 ? (
              <span className=".green-color">
                {coinDetail.ath_change_percentage}%
              </span>
            ) : (
              <span className="red-color">
                {coinDetail.ath_change_percentage}%
              </span>
            )}
          </p>
          <p>
            <span className="span-heading">Price: ₹ </span>
            {coinDetail.current_price}
          </p>
          <p>
            <span className="span-heading">Diluted Value: ₹ </span>
            {coinDetail.fully_diluted_valuation}
          </p>
          <p>
            <span className="span-heading">Low in 24Hr : ₹ </span>
            {coinDetail.low_24h}
          </p>
          <p>
            <span className="span-heading">High in 24Hr : ₹ </span>
            {coinDetail.high_24h}
          </p>
          <p>
            <span className="span-heading">Price Change in 24hr: ₹ </span>
            {coinDetail.price_change_24h >= 0 ? (
              <span className=".green-color">
                {coinDetail.price_change_24h}
              </span>
            ) : (
              <span className="red-color">{coinDetail.price_change_24h}</span>
            )}
          </p>
          <p>
            <span className="span-heading">
              Price Change Percentage in 24hr (%){" "}
            </span>
            {coinDetail.price_change_percentage_24h >= 0 ? (
              <span className=".green-color">
                {coinDetail.price_change_percentage_24h}%
              </span>
            ) : (
              <span className="red-color">
                {coinDetail.price_change_percentage_24h}%
              </span>
            )}
          </p>
          <p>
            <span className="span-heading">Maximum Supply </span>
            {coinDetail.max_supply}
          </p>
          <p>
            <span className="span-heading">Total Supply </span>
            {coinDetail.total_supply}
          </p>
          <p>
            <span className="span-heading">Total Volume </span>
            {coinDetail.total_volume}
          </p>
        </div>
        <Link to="/">
          <button className="section-button">Back To Home</button>
        </Link>
      </section>
    </>
  );
}
export default CoinDetail;
