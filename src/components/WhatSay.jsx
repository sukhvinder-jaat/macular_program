import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import say_img from "../assets/image/svg/say_img.svg";
import Slider from "react-slick";
// import what_img from '../assets/image/svg/what_arrow.svg'
export const WhatSay = () => {
  var sayslider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const buttons = React.useRef();
  return (
    <div className="bg_black py-5">
      <Container className="mt-5 pt-lg-5 container">
        <div className="d-flex flex-column align-items-center position-relative">
          {/* <img src={what_img} alt="what_img"className="position-absolute"/> */}
          <p
            className="clr_white opacity_09 position-relative what_arrow fs_xl ff_plus fw_500 text-center mb-0"
            data-aos="zoom-in"
          >
            What our patients say
          </p>
          <p
            className="clr_white2 opacity_09 ff_roboto fw_400 fs_xsm2 opacity_07 mb-0 mx_630 text-center"
            data-aos="zoom-in"
          >
            Viverra nisi integer convallis ultricies tellus mauris. Ante purus
            pretium ac vitae morbi in ultricies ut. Orci pharetra adipiscing ut.
          </p>
        </div>
        <Row className="pt-5">
          <Col
            lg={6}
            xs={12}
            className="position-relative d-flex justify-content-center"
            data-aos="zoom-in-down"
          >
            <img
              src={say_img}
              alt="say_img"
              className="w-75 position-relative z-2"
            />
            <div className="back_shadow shadow_animation position-absolute who_back"></div>
          </Col>
          <Col
            lg={6}
            xs={12}
            className="d-flex flex-column justify-content-center"
            data-aos="zoom-in-right"
          >
            {/*slider */}
            <Slider {...sayslider} ref={buttons}>
              <div className="mx_500_lg">
                <p className="ff_plus fw_500 clr_white2 fs_md">Alex willson</p>
                <p className="ff_roboto fw_400 fs_xsm2 clr_white opacity_07">
                  Lectus adipiscing pulvinar et praesent justo libero luctus
                  tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                  fames ante in vestibulum duis in odio. Amet pharetra mauris at
                  pellentesque. Netus libero nulla eu id.
                </p>
                <button className="border-0 bg-transparent ff_roboto fw_400 fs_xsm2 clr_darksky">
                  Read More...
                </button>
              </div>
              <div className="mx_500_lg">
                <p className="ff_plus fw_500 clr_white2 fs_md">Alex willson</p>
                <p className="ff_roboto fw_400 fs_xsm2 clr_white opacity_07">
                  Lectus adipiscing pulvinar et pi ut egestas eu. Euismod eu
                  fames ante in vestibulum duis in odio. Amet pharetra mauris at
                  pellentesque. Netus libero nulla eu id. fames ante in
                  vestibulum duis in odio. Amet pharetra mauris at pellentesque.
                  Netus libero nulla eu id.
                </p>
                <button className="border-0 bg-transparent ff_roboto fw_400 fs_xsm2 clr_darksky">
                  Read More...
                </button>
              </div>
            </Slider>
            <div className="d-flex align-items-center mt-sm-4">
              <span
                className="arrow_circle btn_hover position-relative overflow-hidden  d-flex justify-content-center align-items-center rounded-circle pointer"
                onClick={() => buttons.current.slickNext()}
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14781 14.939L0.391918 8.20314C0.311729 8.12295 0.254795 8.03608 0.221116 7.94253C0.187437 7.84898 0.170865 7.74874 0.171399 7.64182C0.171399 7.5349 0.187971 7.43467 0.221116 7.34112C0.254261 7.24756 0.311195 7.16069 0.391918 7.0805L7.14781 0.324606C7.33492 0.137499 7.5688 0.0439453 7.84946 0.0439453C8.13013 0.0439453 8.37069 0.144181 8.57116 0.344653C8.77163 0.545125 8.87187 0.779008 8.87187 1.0463C8.87187 1.3136 8.77163 1.54748 8.57116 1.74795L2.6773 7.64182L8.57116 13.5357C8.75827 13.7228 8.85182 13.9535 8.85182 14.2277C8.85182 14.502 8.75159 14.7391 8.55112 14.939C8.35064 15.1395 8.11676 15.2397 7.84946 15.2397C7.58217 15.2397 7.34829 15.1395 7.14781 14.939Z"
                    fill="#27BBA2"
                  />
                </svg>
              </span>
              <span
                className="arrow_circle btn_hover position-relative overflow-hidden  ms-3 d-flex justify-content-center align-items-center rounded-circle pointer"
                onClick={() => buttons.current.slickPrev()}
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.41859 0.34421L9.17449 7.08006C9.25468 7.16025 9.31161 7.24712 9.34529 7.34067C9.37897 7.43423 9.39554 7.53446 9.39501 7.64138C9.39501 7.7483 9.37843 7.84853 9.34529 7.94209C9.31215 8.03564 9.25521 8.12251 9.17449 8.2027L2.41859 14.9586C2.23149 15.1457 1.9976 15.2393 1.71694 15.2393C1.43628 15.2393 1.19571 15.139 0.995244 14.9386C0.794772 14.7381 0.694536 14.5042 0.694536 14.2369C0.694536 13.9696 0.794772 13.7357 0.995244 13.5352L6.88911 7.64138L0.995244 1.74751C0.808137 1.5604 0.714582 1.32973 0.714582 1.05548C0.714582 0.78124 0.814818 0.544147 1.01529 0.34421C1.21576 0.143738 1.44965 0.0435028 1.71694 0.0435028C1.98424 0.0435028 2.21812 0.143738 2.41859 0.34421Z"
                    fill="#27BBA2"
                  />
                </svg>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
