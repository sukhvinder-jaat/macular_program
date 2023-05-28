import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import thumb from "../assets/image/webp/video_thumb.webp";
import youtube from "../assets/image/svg/youtube-icon.svg";
import you_1 from "../assets/image/webp/jone_1.webp";
import you_2 from "../assets/image/webp/jone_2.webp";
import you_3 from "../assets/image/webp/jone_3.webp";
import you_4 from "../assets/image/webp/jone_4.webp";
import you_5 from "../assets/image/webp/jone_5.webp";
import you_6 from "../assets/image/webp/jone_6.webp";
import Slider from "react-slick";
import { Col } from "react-bootstrap";

export const Videot = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 12000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="bg_black py-lg-5 pt-5 position-relative">
      <div className="back_shadow shadow_animation position-absolute bottom-0 end-0"></div>
      <div className="back_shadow shadow_animation position-absolute video_shadow_3"></div>
      <div className="back_shadow shadow_animation position-absolute video_shadow_4"></div>
      <div className="back_shadow shadow_animation position-absolute middle_shadow"></div>
      <div className="back_shadow shadow_animation position-absolute start-0 side_video_shadow"></div>
      <Container className="py-lg-5 pt-5 container position-relative">
        <p className="ff_plus fw_500 pb-5 fs_xl clr_white position-relative video_arrow text-center">
          Video Testimonials
        </p>
        <div className="w-100  position-relative">
          <ReactPlayer
            className="w-100 h_600"
            controls={true}
            light={thumb}
            url="https://youtu.be/L_tg2u26tCU"
          />
        </div>
        <p className="ff_plus fw_500 mb-5 clr_white fs_lg pt-4 text-center text-lg-start">
          A patient named Paddy, was suffering from dry AMD and temporary vision
          loss. Our strategies cured her and now she is living happily.
        </p>
        <Slider {...settings}>
          <Col lg={4}>
            <div className="p-3">
              <div className="y_box">
                <img className="w-100 rounded-top" src={you_1} alt="you_2" />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white2">
                    Jenny Wilson
                  </p>
                  <p className="opacity_08 fw_400 fs_xsm22 ff_Roboto clr_white2">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="p-3">
              <div className="y_box">
                <img className="w-100 rounded-top" src={you_2} alt="you_2" />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white2">
                    Dianne Russell
                  </p>
                  <p className="opacity_07 fw_400 fs_xsm2 ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="p-3">
              <div className="y_box">
                <img className="w-100 rounded-top" src={you_3} alt="you_2" />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white2">Jacob Jones</p>
                  <p className="opacity_07 fw_400 fs_xsm2 ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="p-3">
              <div className="y_box">
                <img className="w-100 rounded-top" src={you_4} alt="you_2" />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white2">
                    Cameron Williamson
                  </p>
                  <p className="opacity_07 fw_400 fs_xsm2 ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="p-3">
              <div className="y_box">
                <img className="w-100 rounded-top" src={you_5} alt="you_2" />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white2">
                    Esther Howard
                  </p>
                  <p className="opacity_07 fw_400 fs_xsm2 ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="p-3">
              <div className="y_box">
                <img className="w-100 rounded-top" src={you_6} alt="you_2" />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white2">
                    Eleanor Pena
                  </p>
                  <p className="opacity_07 fw_400 fs_xsm2 ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Slider>
        <div className="d-flex justify-content-center mt-5 mb-4">
          <button className="contact_btn border-0 position-relative btn_hover overflow-hidden rounded-pill p_15_30 clr_white ff_plus fw_600 fs_xsm">
            See all
          </button>
        </div>
      </Container>
    </div>
  );
};
