import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/image/webp/more_img.webp";
import owl from "../assets/image/svg/more_owl.svg";
import eye from "../assets/image/svg/more_eye.svg";
import arrow from "../assets/image/svg/more_arrow.svg";
export const More = () => {
  return (
    <div className="bg_black py-5 mt_-1 overflow-hidden">
      <Container className="container">
        <Row>
          <Col
            lg={5}
            xs={12}
            className="d-flex pb-5 pb-lg-0 flex-column align-items-center"
            data-aos="zoom-in"
          >
            <div className="position-relative">
              <div className="back_shadow position-absolute more_back_shadow shadow_animation"></div>
              {/* big img */}
              <img
                src={image}
                alt="method_img"
                className="more_img_width h-100 z-2  position-relative"
              />
              {/* box 1 */}
              <div className="box_shadow_box2 d-none d-sm-block animation_up position-absolute mx_220 z-10 px-3 py-2">
                <div className="d-flex align-items-center pb-2">
                  <span className="owl_box p-2 d-flex align-items-center justify-content-center">
                    <img src={eye} alt="eye" />
                  </span>
                  <p className="mb-0 ps-3 fw_400  fs_xsm2 ff_poppins clr_white2">
                    Macular Degeneration
                  </p>
                </div>
              </div>
              {/* box 2 */}
              <div className="box_shadow_box position-absolute animation_up z-10 mx_220 px-3 py-2">
                <div className="d-flex align-items-center pb-2">
                  <span className="owl_box p-2 d-flex align-items-center justify-content-center">
                    <img src={owl} alt="owl" />
                  </span>
                  <p className="mb-0 ps-3 fw_600 fs_xsm2 ff_poppins clr_white2">
                    Patient Recover
                  </p>
                </div>
                <p className="clr_white">
                  We are using an injection to stop the growth factor of Retina
                </p>
              </div>
              <div className="more_box"></div>
            </div>
          </Col>
          <Col
            lg={7}
            xs={12}
            className="d-flex align-items-center justify-content-xl-end justify-content-center pt-xl-0 pt-5"
            data-aos="zoom-in-up"
          >
            <div className="position-relative mx_550 text-center text-lg-start">
              {/* arrow */}
              <img
                src={arrow}
                alt="arrow"
                className="z-10 position-absolute more_arrow"
              />
              <p className="ff_plus fw_500 fs_xl clr_white opacity_09">
                More than 50% patients recovered
              </p>
              <p className="fw_400 pb-3 fs_xsm2 ff_poppins clr_white2 opacity_07">
                In 2013, We conducted a test with 365 dry and wet AMD patients.
                In this test recovery rate of patients is 48% of dry AMD and 60%
                of wet AMD. Another patient named Paddy, was suffering from dry
                AMD and temporary vision loss. Our strategies cured her and now
                she is living happily.
              </p>
              <button className="contact_btn position-relative btn_hover overflow-hidden border-0 rounded-pill p_15_30 clr_white ff_plus fw_600 fs_xsm">
                Book Call
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
