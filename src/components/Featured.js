import "./featured.css";
const Featured = () => {
  return (
    <section className="Featured___container">
      <h1>
        Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice
      </h1>
      <div className="Featured__details">
        <div className="first__details">
          <div className="text">
            <h2>Invest Smart</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur rem ducimus vitae maiores dolorum alias.
            </p>
            <a href="/" className="button">
              Lern more
            </a>
          </div>
          <div className="img">
            <img
              src="https://cypto-currency.vercel.app/static/media/feature-1-img.3ebec6b2c18fd2e8cb8f.png"
              alt=""
            />
          </div>
        </div>
        <div className="second__details">
          <div className="img">
            <img
              src="https://cypto-currency.vercel.app/static/media/feature-2-img.cf233659a120d86cd676.png"
              alt=""
            />
          </div>
          <div className="text">
            <h2>Detailed Statistics</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deserunt commodi quos adipisci! Corporis, vero?
            </p>
            <a href="/" className="button">
              Lern more
            </a>
          </div>
        </div>
        <div className="third__details">
          <div className="text">
            <h2>Grow Your Profit And Track Your Investments</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim
              odit distinctio dolore id incidunt?
            </p>
            <a href="/" className="button">
              Lern more
            </a>
          </div>
          <div className="img">
            <img
              src="https://cypto-currency.vercel.app/static/media/feature-3-img.5df40cff033a1a81e9d1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="start___mining">
        <div className="mining__texts">
          <h2>Start Mining Now</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            saepe.
          </p>
        </div>
        <div className="input__section">
          <input type="text" placeholder="Enter message" />
          <a href="/">subscribe</a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
