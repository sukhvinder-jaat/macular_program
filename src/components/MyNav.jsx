import React from "react";
import { Container, Nav } from "react-bootstrap";
import { AiOutlineAlignRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import logo from "../assets/image/svg/logo_nav.svg";

import { Link } from "react-router-dom";
export const MyNav = () => {
  const [first, setfirst] = React.useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="bg_black d-flex flex-column  overflow-hidden">
      <Nav className="py-3">
        <Container className="container">
          <div className="d-flex justify-content-between align-items-center">
            <span className="z-10">
              <img src={logo} alt="logo nav" className="w-100 pointer" />
            </span>
            <div className="d-flex align-items-center">
              <ul
                className={
                  first
                    ? "nav_show d-flex gap-4 align-items-center mb-0 p-0"
                    : "nav_show d-flex showw gap-2 mb-0 align-items-center ps-0 mb-0"
                }
              >
                <li>
                  <Link
                    className="position-relative  hover_green  hover_line effect opacity_07 clr_white"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="position-relative opacity_07 ms_40_lg_min hover_green clr_white hover_line effect"
                    to="/About"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="position-relative ms_40_lg_min hover_green  hover_line effect opacity_07 clr_white"
                    to="/Testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className="position-relative ms_40_lg_min hover_green  hover_line effect opacity_07 clr_white"
                    to="/"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    className="position-relative ms_40_lg_min hover_green  hover_line effect opacity_07 clr_white"
                    to="/"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <div className="d-block d-lg-none">
                    <button className="contact_btn border-0 position-relative btn_hover overflow-hidden rounded-pill p_15_30 clr_white ff_plus fw_600 fs_xsm">
                      Contact Us
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="d-none d-lg-block">
              <div className="d-flex align-items-center">
                <button className="contact_btn position-relative btn_hover overflow-hidden  border-0 rounded-pill p_15_30 clr_white ff_plus fw_600 fs_xsm">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="z-10 d-lg-none">
              <h3 className="text-white w-100" onClick={clickshow}>
                {first ? <AiOutlineAlignRight /> : <ImCross />}
              </h3>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};
