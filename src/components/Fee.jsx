import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fee_arrow from "../assets/image/svg/fee_arrow.svg";
import girl from "../assets/image/svg/girl_sketch.svg";
import shadow from "../assets/image/svg/skech_shadow.svg";
import right_line from "../assets/image/svg/fee_right_line.svg";
import left_line from "../assets/image/svg/fe_left_line.svg";
export const Fee = () => {
  return (
    <div className="bg_black py-5 mb-5 position-relative mt_-1">
      <div className="back_shadow position-absolute shadow_animation"></div>
      <Container>
        <Row>
          <Col lg={5} xs={12} data-aos="fade-down-right">
            <div className="d-flex flex-column align-items-center">
              <div>
                <span className="position-relative">
                  <div>
                    <img
                      src={fee_arrow}
                      alt="fee_arrow"
                      className="fee_arrow"
                    />
                    <p className="ff_plus fw_500 fs_2xl clr_white opacity_09">
                      Fee Structure
                    </p>
                  </div>
                </span>
              </div>
              <span className="d-flex justify-content-center position-relative pt-5">
                <img
                  src={girl}
                  alt="girl"
                  className="w-100 position-relative z-2"
                />
                <img
                  src={shadow}
                  alt="shadow"
                  className="w-50 start-0 position-absolute bottom-0"
                />
              </span>
            </div>
          </Col>
          <Col
            lg={7}
            xs={12}
            className="px-md-5 d-flex align-items-end pt-lg-0 pt-4 position-relative"
          >
            <div className="position-absolute back_shadow top-50 start-50 translate-middle-x shadow_animation"></div>
            <div className="px-sm-4 position-relative">
              {/* right line */}
              <img
                src={right_line}
                alt="right_line"
                className="position-absolute fee_right_line d-none d-sm-block"
              />
              {/* left line */}
              <img
                src={left_line}
                alt="left_line"
                className="position-absolute fee_left_line d-none d-sm-block"
              />
              {/* box 1 */}
              <div
                className="one_box pointer w-100 p-4 mb-4"
                data-aos="fade-down-left"
              >
                <p className="fw_500 pb-2 ff_plus clr_white fs_md mb-0">
                  One Time Enrollment $3000/y
                </p>
                <p className="ff_roboto mb-1 fw_400 fs_xsm2 clr_white opacity_07">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim
                </p>
              </div>
              {/* box 2 */}
              <div
                className="one_box pointer w-100 p-4 mb-4"
                data-aos="fade-down-left"
              >
                <p className="fw_500 pb-2 ff_plus clr_white fs_md mb-0">
                  Medical Grade Supplements $80-125/m
                </p>
                <p className="ff_roboto mb-1 fw_400 fs_xsm2 clr_white opacity_07">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim
                </p>
              </div>
              {/* box 3 */}
              <div
                className="one_box pointer w-100 p-4"
                data-aos="fade-down-left"
              >
                <p className="fw_500 pb-2 ff_plus clr_white fs_md mb-0">
                  Maintenance $450/ Lab check
                </p>
                <p className="ff_roboto mb-1 fw_400 fs_xsm2 clr_white opacity_07">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
