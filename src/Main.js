import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import App from "./js/App";
import About from "./js/About";
import Testimonials from "./js/Testimonials";
import Preloader from "./components/Preloader";
function Main() {
  AOS.init();
  return (
    <div className="overflow-hidden bg_black">
      <Preloader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
}

export default Main;
