import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import swiper_img from "../assets/image/webp/swap_img.webp";
import Slider from "react-slick";
import AOS from "aos";
export const Symptoms = () => {
  var swiplider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const buttons = React.useRef();
  AOS.init();
  return (
    <div className="bg_black pb-5">
      <Container className="container" data-aos="flip-up">
        <div className="disease_box rounded-4 position-relative">
          <div className="back_shadow position-absolute bottom-0 end-0"></div>
          <div className="dis_top_box py-4">
            <p className="ff_plus fw_500 fs_xl mb-0 clr_white opacity_09 text-center">
              Symptoms of the disease
            </p>
            <p className="ff_roboto fw_400 fs_xsm2  clr_white2 opacity_07 text-center">
              Macular degeneration is a progressive eye disease that can cause a
              range of problems, including:
            </p>
          </div>

          <Row className="align-items-center position-relative flex-column-reverse flex-md-row">
            <div className="back_shadow position-absolute top-0 start-50 translate-middle-x"></div>
            <Col md={7} xs={12}>
              <div className="ps-md-5 px-2 pb-4">
                <Slider {...swiplider} ref={buttons}>
                  <div className="mx_500_lg">
                    <p className="ff_plus text-center text-md-start fw_500 clr_white2 fs_md">
                      Blurred or distorted central vision
                    </p>
                    <p className="ff_roboto text-center text-md-start fw_400 fs_xsm2 clr_white opacity_07">
                      This is one of the primary symptoms of macular
                      degeneration. As the disease progresses, it can cause the
                      vision to become increasingly blurred or distorted, making
                      it difficult to read, recognize faces, or perform other
                      tasks that require clear vision.
                    </p>
                  </div>
                  <div className="mx_500_lg">
                    <p className="ff_plus text-center text-md-start fw_500 clr_white2 fs_md">
                      Blurred or distorted central vision
                    </p>
                    <p className="ff_roboto text-center text-md-start fw_400 fs_xsm2 clr_white opacity_07">
                      This is one of the primary symptoms of macular tasks that
                      require clear vision. degeneration. As the disease
                      progresses, it can cause the vision to become increasingly
                      blurred or distorted, making it difficult to read,
                      recognize faces, or perform other
                    </p>
                  </div>
                </Slider>
                <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-sm-4">
                  <span
                    className="arrow_circle d-flex btn_hover position-relative overflow-hidden justify-content-center align-items-center rounded-circle pointer"
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
              </div>
            </Col>
            <Col md={5} xs={12} className="d-flex align-items-center">
              <img
                src={swiper_img}
                alt="swiper_img"
                className="w_90 position-relative z-2"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
