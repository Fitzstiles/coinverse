import { useEffect, useState } from "react";
import PriceTracker from "./PriceTracker";
import axios from "axios";
import "./pricetracker.css";

const GetPrice = () => {
  const [coins, setcoins] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      );
      setcoins(request.data);
      return request;
    }
    getData();
  }, []);
  console.log(coins);
  return (
    <div className="get__price">
      <h1>View top cryptocurrency prices and market cap live </h1>
      {coins.map((coin) => (
        <PriceTracker key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default GetPrice;
