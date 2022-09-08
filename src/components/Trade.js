import "./trade.css";
const Trade = () => {
  return (
    <section className="trade__container">
      <h2 data-aos="zoom-in" data-aos-duration="3000">
        Trade Securely And Market The High Growth Cryptocurrencies.
      </h2>
      <div className="trade__details">
        <div className="first__item">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="logo__names">
            <h2>Bitcoin</h2> <span>BTC</span>
          </div>
          <p>
            Digital currency in which a record of transactions is maintained.
          </p>
          <button>start mining</button>
        </div>
        <div className="second__item">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="logo__names">
            <h2>Etherum</h2>
            <span>ETH</span>
          </div>

          <p>
            Blockchain technology to create and run decentralized digital
            applications.
          </p>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </button>
        </div>
        <div className="third__section">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="logo__names">
            <h2>LiteCoin</h2> <span>LTC</span>
          </div>
          <p>
            Cryptocurrency that enables instant payments to anyone in the world.
          </p>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trade;
