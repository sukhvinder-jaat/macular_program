import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import method_img from "../assets/image/webp/method_img.webp";
import input_tick from "../assets/image/svg/input_tick.svg";
export const Homming = () => {
  return (
    <div className="bg_black py-lg-5 mt_-1">
      <Container className="container">
        <Row>
          <Col lg={7} xs={12} data-aos="fade-down-right">
            <div>
              <p className="ff_plus fw_500 clr_white fs_lg">
                The HOMING Method
              </p>
              <p className="ff_roboto fw_400 fs_xsm2 clr_white opacity_07 mx_550_lg mx_550_lg">
                We will start by taking a detailed medical history, including
                any symptoms you may be experiencing. They will ask about your
                family history of eye diseases and other medical conditions.
              </p>
              <div className="d-flex pt-sm-3 pt-0 align-items-start mb-3 border_custom mx_500">
                <span className="d-flex align-items-start pt-1">
                  <img className="w-100" src={input_tick} alt="input_tick" />
                </span>
                <div className="ps-3 d-flex justify-content-center flex-column">
                  <p className="fw_500 mb-sm-2 mb-0 fs_xsm2 ff_plus clr_white">
                    Medical History - Patient Portal
                  </p>
                  <p className="ff_roboto pb-md-3 mb-2 mb-0 fw_400 clr_white2 opacity_07 fs_xsm2">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    {""}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3 border_custom mx_500">
                <span className="d-flex align-items-start pt-1">
                  <img className="w-100" src={input_tick} alt="input_tick" />
                </span>
                <div className="ps-3 d-flex justify-content-center flex-column">
                  <p className="fw_500 mb-sm-2 mb-0 fs_xsm2 ff_plus clr_white">
                    Lab Test (Insurance Covered)
                  </p>
                  <p className="ff_roboto pb-md-3 mb-2 mb-0 fw_400 clr_white2 opacity_07 fs_xsm2">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    purus aliquam mauris
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3 mx_500">
                <span className="d-flex align-items-start pt-1">
                  <img className="w-100" src={input_tick} alt="input_tick" />
                </span>
                <div className="ps-3 d-flex justify-content-center flex-column">
                  <p className="fw_500 mb-sm-2 mb-0 fs_xsm2 ff_plus clr_white">
                    Customized Macular Program Report
                  </p>
                  <p className="ff_roboto pb-md-3 mb-2 mb-0 fw_400 clr_white2 opacity_07 fs_xsm2">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    purus aliquam mauris
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={5}
            xs={12}
            className="d-flex justify-content-center align-items-center position-relative"
            data-aos="fade-down-left"
          >
            <div className="position-relative">
              <img
                src={method_img}
                alt="method_img"
                className="w-100 h-100 z-2 method_img position-relative"
              />
              <div className="method_box"></div>
            </div>
            <div className="back_shadow position-absolute method_shadow shadow_animation end-0"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
