import { useState } from "react";
import "./header.css";
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <section className="header__container">
      <div className="logo">
        <a href="/">
          <img
            src="https://cypto-currency.vercel.app/static/media/logo.e44a93b92960b7a7a870e08a3080d60e.svg"
            alt=""
          />
        </a>
      </div>
      <section className={`header__links ${isOpen && "open"}`}>
        <a href="/">Products</a>
        <a href="/">Features</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <div className="nexted__links">
          <a href="/">Login |</a>
          <a href="/" className="register">
            Register
          </a>
        </div>
      </section>
      <div
        className={`hamburger__menu ${isOpen && "open"}`}
        onClick={() => setIsopen(!isOpen)}
      >
        <span className="bar"></span>
      </div>
    </section>
  );
};

export default Header;
