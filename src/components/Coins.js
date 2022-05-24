import React from "react";
import { Link } from "react-router-dom";

function Coins({
  id,
  symbol,
  name,
  image,
  current_price,
  price_change_percentage_24h,
  market_cap,
  market_cap_rank,
}) {
  return (
    <tr key={id}>
      <th scope="row">{market_cap_rank}</th>
      <td>
        <img src={image} alt={name} />
      </td>
      <td>{name}</td>
      <td>{symbol.toUpperCase()}</td>
      <td>₹{current_price.toLocaleString()}</td>
      {price_change_percentage_24h >= 0 ? (
        <td className="green-color">{price_change_percentage_24h}%</td>
      ) : (
        <td className="red-color">{price_change_percentage_24h}%</td>
      )}
      <td>₹{market_cap.toLocaleString()}</td>
      <td>
        <Link to={`/coin/${id}`} className="btn btn-outline-dark">
          Details
        </Link>
      </td>
    </tr>
  );
}

export default Coins;
