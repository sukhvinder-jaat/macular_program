import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image_1_slider from "../assets/image/webp/slider_img_1.webp";
import slider_img_2 from "../assets/image/webp/slider_img_2.webp";
import star from "../assets/image/svg/star_slider.svg";
import Slider from "react-slick";
export const RodneySlider = () => {
  var amd_slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const buttons = React.useRef();
  return (
    <div className="py-5 position-relative">
      <Container className="pb-5 container">
        <div className="d-flex align-items-center flex-column flex-sm-row">
          <button className="position-relative overflow-hidden btn_hover ff_roboto text-center text-lg-start fw_500 clr_white2 fs_sm amd_btn">
            Wet AMD Testimonials
          </button>
          <button className="ms-sm-4 mt-4 mt-sm-0 position-relative overflow-hidden btn_hover ff_roboto text-center text-lg-start fw_500 clr_white2 fs_sm amd_btn">
            Dry AMD Testimonials
          </button>
        </div>
      </Container>
      <Slider className="" {...amd_slider} ref={buttons}>
        <div className="px-4">
          <div className="amd_slider_box p-sm-5 p-2">
            <Row>
              <Col md={4} xs={12}>
                <div className="position-relative slider_img_back">
                  <img
                    src={image_1_slider}
                    alt="image_1_slider"
                    className="w-100 position-relative z-2"
                  />
                </div>
              </Col>
              <Col
                md={8}
                xs={12}
                className="d-flex flex-column justify-content-center"
              >
                <div className="ps-xl-5 ps-sm-4">
                  <p className="ff_roboto text-center text-lg-start fw_400 fs_xsm2 clr_white2 opacity_08 position-relative coma_img mt-3 mt-sm-0">
                    My experience with the Rozakis institute/Advanced-Wellness
                    has been a success. I was receiving the eye shots, but after
                    the nutritional program recommended by Dr. Rozakis, my
                    eyesight in my damaged eye improved and now I have gone from
                    monthly shots to a five month period, and I am expecting to
                    stop them altogether, soon These research have their hands
                    on a valuable remedy and are successful with their
                    pioneering Thanks to them!
                  </p>
                  <div className="d-flex flex-column align-items-center align-items-lg-start">
                    <p className="ff_plus fw_500 clr_white2 fs_md2">
                      Rodney Gunther
                    </p>
                    <span>
                      <img src={star} alt="star" className="w-100" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-center justify-content-lg-end pt-4 pt-lg-0">
                    <span
                      onClick={() => buttons.current.slickNext()}
                      className="pointer"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.6415"
                          cy="17.6415"
                          r="17.6415"
                          fill="#27BBA2"
                        />
                        <path
                          d="M20.1473 24.9385L13.3914 18.2027C13.3112 18.1225 13.2543 18.0356 13.2206 17.942C13.1869 17.8485 13.1704 17.7483 13.1709 17.6413C13.1709 17.5344 13.1875 17.4342 13.2206 17.3406C13.2538 17.2471 13.3107 17.1602 13.3914 17.08L20.1473 10.3241C20.3344 10.137 20.5683 10.0435 20.849 10.0435C21.1296 10.0435 21.3702 10.1437 21.5707 10.3442C21.7711 10.5446 21.8714 10.7785 21.8714 11.0458C21.8714 11.3131 21.7711 11.547 21.5707 11.7475L15.6768 17.6413L21.5707 23.5352C21.7578 23.7223 21.8513 23.953 21.8513 24.2272C21.8513 24.5015 21.7511 24.7386 21.5506 24.9385C21.3502 25.139 21.1163 25.2392 20.849 25.2392C20.5817 25.2392 20.3478 25.139 20.1473 24.9385Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                    <span
                      className="ms-3 pointer"
                      onClick={() => buttons.current.slickPrev()}
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.9247"
                          cy="17.6415"
                          r="17.6415"
                          fill="#27BBA2"
                        />
                        <path
                          d="M15.4181 10.3442L22.174 17.0801C22.2542 17.1602 22.3111 17.2471 22.3448 17.3407C22.3785 17.4342 22.3951 17.5345 22.3945 17.6414C22.3945 17.7483 22.3779 17.8485 22.3448 17.9421C22.3117 18.0356 22.2547 18.1225 22.174 18.2027L15.4181 24.9586C15.231 25.1457 14.9971 25.2393 14.7165 25.2393C14.4358 25.2393 14.1952 25.139 13.9948 24.9386C13.7943 24.7381 13.694 24.5042 13.694 24.2369C13.694 23.9696 13.7943 23.7357 13.9948 23.5352L19.8886 17.6414L13.9948 11.7475C13.8076 11.5604 13.7141 11.3297 13.7141 11.0555C13.7141 10.7812 13.8143 10.5441 14.0148 10.3442C14.2153 10.1437 14.4492 10.0435 14.7165 10.0435C14.9837 10.0435 15.2176 10.1437 15.4181 10.3442Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* second */}
        <div className="px-4">
          <div className="amd_slider_box p-sm-5 p-2">
            <Row>
              <Col md={4} xs={12}>
                <div className="position-relative slider_img_back">
                  <img
                    src={slider_img_2}
                    alt="slider_img_2"
                    className="w-100 position-relative z-2"
                  />
                </div>
              </Col>
              <Col
                md={8}
                xs={12}
                className="d-flex flex-column justify-content-center"
              >
                <div className="ps-xl-5 ps-sm-4">
                  <p className="ff_roboto text-center text-lg-start fw_400 fs_xsm2 clr_white2 opacity_08 position-relative coma_img mt-3 mt-sm-0">
                    My experience with the Rozakis institute/Advanced-Wellness
                    has been a success. I was receiving the eye shots, but after
                    the nutritional program recommended by Dr. Rozakis, my
                    eyesight in my damaged eye improved and now I have gone from
                    monthly shots to a five month period, and I am expecting to
                    stop them altogether, soon These research have their hands
                    on a valuable remedy and are successful with their
                    pioneering Thanks to them!
                  </p>
                  <div className="d-flex flex-column align-items-center align-items-lg-start">
                    <p className="ff_plus fw_500 clr_white2 fs_md2">
                      Rodney Gunther
                    </p>
                    <span>
                      <img src={star} alt="star" className="w-100" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-center justify-content-lg-end pt-4 pt-lg-0">
                    <span
                      onClick={() => buttons.current.slickNext()}
                      className="pointer"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.6415"
                          cy="17.6415"
                          r="17.6415"
                          fill="#27BBA2"
                        />
                        <path
                          d="M20.1473 24.9385L13.3914 18.2027C13.3112 18.1225 13.2543 18.0356 13.2206 17.942C13.1869 17.8485 13.1704 17.7483 13.1709 17.6413C13.1709 17.5344 13.1875 17.4342 13.2206 17.3406C13.2538 17.2471 13.3107 17.1602 13.3914 17.08L20.1473 10.3241C20.3344 10.137 20.5683 10.0435 20.849 10.0435C21.1296 10.0435 21.3702 10.1437 21.5707 10.3442C21.7711 10.5446 21.8714 10.7785 21.8714 11.0458C21.8714 11.3131 21.7711 11.547 21.5707 11.7475L15.6768 17.6413L21.5707 23.5352C21.7578 23.7223 21.8513 23.953 21.8513 24.2272C21.8513 24.5015 21.7511 24.7386 21.5506 24.9385C21.3502 25.139 21.1163 25.2392 20.849 25.2392C20.5817 25.2392 20.3478 25.139 20.1473 24.9385Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                    <span
                      className="ms-3 pointer"
                      onClick={() => buttons.current.slickPrev()}
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.9247"
                          cy="17.6415"
                          r="17.6415"
                          fill="#27BBA2"
                        />
                        <path
                          d="M15.4181 10.3442L22.174 17.0801C22.2542 17.1602 22.3111 17.2471 22.3448 17.3407C22.3785 17.4342 22.3951 17.5345 22.3945 17.6414C22.3945 17.7483 22.3779 17.8485 22.3448 17.9421C22.3117 18.0356 22.2547 18.1225 22.174 18.2027L15.4181 24.9586C15.231 25.1457 14.9971 25.2393 14.7165 25.2393C14.4358 25.2393 14.1952 25.139 13.9948 24.9386C13.7943 24.7381 13.694 24.5042 13.694 24.2369C13.694 23.9696 13.7943 23.7357 13.9948 23.5352L19.8886 17.6414L13.9948 11.7475C13.8076 11.5604 13.7141 11.3297 13.7141 11.0555C13.7141 10.7812 13.8143 10.5441 14.0148 10.3442C14.2153 10.1437 14.4492 10.0435 14.7165 10.0435C14.9837 10.0435 15.2176 10.1437 15.4181 10.3442Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Slider>
    </div>
  );
};
