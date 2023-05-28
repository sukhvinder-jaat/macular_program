import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyNav } from "../components/MyNav";
import { Foot } from "../components/Foot";
import { Methodology } from "../components/Methodology";
import { Homming } from "../components/Homming";
import { Biochemistry } from "../components/Biochemistry";
import { More } from "../components/More";
import { Sucess } from "../components/Sucess";
import { Who } from "../components/Who";
import { Fee } from "../components/Fee";
import { Experts } from "../components/Experts";
import { WhatSay } from "../components/WhatSay";
import { Asked } from "../components/Asked";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import { Her } from "../components/Her";
import { Symptoms } from "../components/Symptoms";
import { BackTop } from "../components/BackTop";
function App() {
  return (
    <div className="App overflow-hidden bg_black">
      <Routes>
        <Route path="/" element={<MyNav />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Her />
      <BackTop />
      <Symptoms />
      <Methodology />
      <Homming />
      <Biochemistry />
      <More />
      <Sucess />
      <Who />
      <Fee />
      <Experts />
      <WhatSay />
      <Asked />
      <Foot />
    </div>
  );
}

export default App;
