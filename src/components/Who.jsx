import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import who_arrow from "../assets/image/svg/who_arrow.svg";
import tick from "../assets/image/svg/tick_who.svg";
import cross from "../assets/image/svg/red_cross.svg";
import tick_small from "../assets/image/svg/small_tick.svg";
export const Who = () => {
  return (
    <div className="bg_black py-5">
      <Container className="container">
        <p
          className="clr_white ff_plus fw_500 fs_xl opacity_09 text-center position-relative"
          data-aos="flip-up"
        >
          Who will be eligible for
          <span className="d-block"> the Program</span>
          <img
            src={who_arrow}
            alt="who arrow"
            className="position-absolute who_arrow"
          />
        </p>
        {/*box */}
        <Row className="position-relative pt-4">
          <div className="back_shadow top-0 end-0 position-absolute shadow_animation"></div>
          <Col md={6} xs={12} className="" data-aos="zoom-out-right">
            <div className="who_box w-100 p-4 p-lg-5 position-relative overflow-hidden">
              <div className="back_shadow position-absolute bottom-0 end-0 shadow_animation"></div>
              <span className="">
                <img src={tick} alt="tick" className="" />
              </span>
              <div className="d-flex pt-5 align-items-center">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Prevention vision loss
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Drusen
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Wet in an eye
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Diabetic Retinopathy
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Prevention wet AMD
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Vision loss
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Wet in both eyes
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Cataract + AMD
                </p>
              </div>
            </div>
          </Col>
          {/* box 2 */}
          <Col md={6} xs={12} className="pt-md-0 pt-4" data-aos="zoom-out-left">
            <div className="who_box w-100 h-100 p-4 p-lg-5 position-relative overflow-hidden">
              <div className="back_shadow position-absolute bottom-0 end-0 shadow_animation"></div>
              <span className="">
                <img src={cross} alt="cross" className="" />
              </span>
              <div className="d-flex pt-5 align-items-center">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Macular hole
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Irreversible legal Blindness
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Macular Puckar
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={tick_small} alt="tick_small" />
                <p className="ff_roboto mb-0 fw_400 ps-3 fs_xsm2 clr_white2">
                  Chemotherapy
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center pt-5">
          <button
            className="contact_btn position-relative btn_hover overflow-hidden border-0 rounded-pill p_15_30 clr_white ff_plus fw_600 fs_xsm2"
            data-aos="flip-up"
          >
            Book Call
          </button>
        </div>
      </Container>
    </div>
  );
};
