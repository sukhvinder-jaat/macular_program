
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyNav } from "../components/MyNav";
import { Foot } from "../components/Foot";
import { More } from "../components/More";
import { Route, Routes } from "react-router-dom";
import { Sucess } from "../components/Sucess";
import { WhatSay } from "../components/WhatSay";
import { Asked } from "../components/Asked";
import { AboutHead } from "../components/AboutHead";
import { AboutSay } from "../components/AboutSay";
import { Team } from "../components/Team";
import Journey from "../components/Journey";
function About() {
  return (
    <div className="overflow-hidden bg_black">
      {/* <Preloader /> */}
      <Routes>
        <Route path="/" element={<MyNav />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <AboutSay />
      <Journey/>  
      <Team/>
      <More />
      <Sucess />
      <WhatSay />
      <Asked />
      <Foot />
    </div>
  );
}

export default About;
