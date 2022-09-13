import { useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Trade from "./components/Trade";
import Featured from "./components/Featured";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import GetPrice from "./components/GetPrice";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <GetPrice />
      <About />
      <Trade />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
