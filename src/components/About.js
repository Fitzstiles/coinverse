import "./about.css";
const About = () => {
  return (
    <section className="About_contaner">
      <section className="first__section">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="first__icon"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            color="blue"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path>
          </svg>
          <div className="details">
            <h2>30B</h2>
            <p>Digital Currency Exchange</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="second__icon"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            color="blue"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z"></path>
            <path d="M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5a2.5 2.5 0 00-5 0V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"></path>
          </svg>
          <div className="details">
            <h2>190+</h2>
            <p>Countries Around The World</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="third__icon"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            color="blue"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
          <div className="details">
            <h2>$10M</h2>
            <p>Trusted Wallet Investors</p>
          </div>
        </div>
      </section>
      <section className="details__section">
        <section className="about__left">
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="about__image"
          >
            <img
              src="https://cypto-currency.vercel.app/static/media/why-img.83f7e1610dd390441337.png"
              alt=""
            />
          </div>
        </section>
        <section
          data-aos="fade-up"
          data-aos-duration="3000"
          className="about__right"
        >
          <h1>why you should choose CHAPPO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, praesentium.
          </p>
          <a href="/" className="button">
            Learn more
          </a>
        </section>
      </section>
    </section>
  );
};

export default About;
