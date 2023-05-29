import React from "react";
import pre from "../assets/image/svg/logo_nav.svg";

const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 2000);

  return (
    <div
      id="none"
      className="bg_section_1 min-vh-100 w-100  position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <span className="z-10">
          <img src={pre} alt="pre" className="w-100" />
        </span>
      </div>
    </div>
  );
};

export default Preloader;
