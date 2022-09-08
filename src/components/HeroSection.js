import "./heroSection.css";
const HeroSection = () => {
  return (
    <main>
      <section className="left__section">
        <div className="small__texts">
          <span data-aos="zoom-in" data-aos-duration="3000">
            70% SAVE
          </span>
          <p>For the best black friday deals</p>
        </div>
        <h1 data-aos="fade-up" data-aos-duration="3000">
          Fastest & Secure Platform To Invest In Crypto
        </h1>
        <p data-aos="fade-up" data-aos-duration="3000">
          buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
          transactions
        </p>
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="button__container button"
        >
          <button>Try For Free</button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="bg-white py-1 rounded-full w-8 h-8 text-blue-500 px-2 aos-init aos-animate"
            data-aos-offset="100"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 17l5-5-5-5v10z"></path>
            <path fill="none" d="M0 24V0h24v24H0z"></path>
          </svg>
        </div>
      </section>
      <section className="right__section">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="image___container"
        >
          <img
            src="https://cypto-currency.vercel.app/static/media/hero-img.bc2cc512f513aaa9f0bf.png"
            alt=""
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
