import React from "react";
import news from "../assets/image/webp/news_paper.webp";
import { Col, Container, Row } from "react-bootstrap";
export const Sucess = () => {
  return (
    <div className="success_bg position-relative mb-5 mt_-1 vh_80_xl d-flex align-items-center">
      <img
        src={news}
        alt="news"
        className="position-absolute d-none d-xl-block end-0 top-50 translate-middle-y"
        data-aos="zoom-in-left"
      />
      <span className="back_shadow position-absolute end-50"></span>
      <Container className="container py-lg-5 py-xl-0">
        <Row className="flex-column-reverse flex-lg-row">
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center translate_xl"
            data-aos="zoom-in-right"
          >
            <div className="succes_box p-4 text-center text-lg-start">
              <p className="fw_500 fs_xl ff_plus clr_white2">
                Success: Strive, Thrive, and Shine
              </p>
              <p className="ff_roboto fw_400 fs_xsm2 clr_white2 opacity_07 pe-lg-5">
                When it comes to achieving success, there are certain qualities
                that can help you reach your goals. Had it not been for our
                success in many patients we may never have pursued macular
                degeneration
              </p>
              <button className="succes_btn ff_plus fw_600 fs_xsm2">
                Learn More
              </button>
            </div>
          </Col>
          {/*image */}
          <Col lg={6} xs={12} data-aos="zoom-in-left">
            <img src={news} alt="news" className="w-100 d-block d-xl-none" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
