import axios from "axios";
import { useEffect, useState } from "react";
const PriceTracker = () => {
  const [coins, setcoins] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="coin__container">
      <div className="coin__row">
        <div className="coin"></div>
      </div>
    </div>
  );
};

export default PriceTracker;
