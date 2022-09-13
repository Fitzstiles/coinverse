import "./pricetracker.css";
const PriceTracker = ({ coin }) => {
  console.log(coin.price);
  return (
    <div className="coin__container">
      <div className="coin__data">
        <div className="coin__nameandlogo">
          <div className="image">
            <img src={coin.image} alt="" />
          </div>
          <p>{coin.name}</p>
        </div>
        <div className="current__price">
          <p>current price:</p>
          <span>${coin.current_price}</span>
        </div>
        <div className="market__cap">
          <p>market cap:</p>
          <span>{coin.market_cap}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceTracker;
