import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import meth_img from "../assets/image/webp/meth_img.webp";
import arrow from "../assets/image/svg/our_arrow.svg";
export const Methodology = () => {
  return (
    <div className="bg_black py-lg-5 position-relative" id="second">
      <Container className="container py-5 position-relative">
        <div className="d-inline-block back_shadow position-absolute shadow_animation"></div>
        <Row className="pt-2">
          <Col
            lg={6}
            xs={12}
            className="d-flex position-relative justify-content-lg-start justify-content-center"
            data-aos="fade-up-right"
          >
            <div className="position-relative bg_box image_width_meth">
              <span className="z-2 position-relative">
                <img src={meth_img} alt="meth_img" className="w-100" />
              </span>
            </div>
          </Col>
          <Col
            lg={6}
            xs={12}
            className="pt-lg-0 pt-md-5 d-flex justify-content-lg-start justify-content-center"
            data-aos="fade-up-left"
          >
            <div className="pt-lg-0 pt-5 text-lg-start text-center">
              <span className="position-relative">
                <span className="position-absolute our_arrow">
                  <img src={arrow} alt="arrow" className="w-100" />
                </span>
                <p className="clr_white d-inline-block mb- ff_plus fw_500 fs_xl opacity_09">
                  Our Methodology
                </p>
              </span>
              <p className="ff_roboto fw_400 fs_xsm2 clr_white2 opacity_07">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                purus aliquam mauris quis molestie ornare mauris egestas nibh.
                Arcu sed neque est lacus vivamus mattis libero.
              </p>
              <p className="ff_roboto mb-4 fw_400 fs_xsm2 clr_white2 opacity_07">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                purus aliquam mauris quis molestie ornare mauris egestas nibh.
                Arcu sed neque est lacus vivamus mattis libero.
              </p>
              <button className="contact_btn position-relative btn_hover overflow-hidden border-0 rounded-pill p_15_30 clr_white ff_plus fw_600 fs_xsm">
                Learn more
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
