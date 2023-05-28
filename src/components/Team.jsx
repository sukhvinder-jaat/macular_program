import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team_1 from "../assets/image/webp/team_img_1.webp";
import team_2 from "../assets/image/webp/team_img_2.webp";
export const Team = () => {
  return (
    <div className="overflow-hidden py-5 position-relative">
      <div className="back_shadow shadow_animation position-absolute start-0 top-50 translate-middle-x"></div>
      <Container className="position-relative container">
        <div className="back_shadow shadow_animation position-absolute team_1_shadow"></div>
        <p className="ff_plus fw_500 fs_xl clr_white mb-4 text-center">
          Our Team
        </p>
        <Row className="pt-5">
          <Col
            lg={6}
            xs={12}
            className="p-4 d-flex justify-content-center"
            data-aos="zoom-in"
          >
            <div className="position-relative team_1_side_box">
              <img
                src={team_1}
                alt="team_1"
                className="team_img_w position-relative z-2"
              />
            </div>
          </Col>
          <Col lg={6} xs={12} data-aos="zoom-in-up">
            <p className="fw_500 text-center text-lg-start clr_white ff_plus fs_lg">
              George W. Rozakis, MD
            </p>
            <p className="text-center text-lg-start ff_roboto fw_400 fs_xsm2 clr_white2 opacity_08">
              Dr. Rozakis is a board certified biomedical engineer who studied
              medicine at Cornell Medical Center and studied Ophthalmology at
              the Duke Eye Center. Dr. Rozakis worked in the field of Advanced
              Wellness / Functional Medicine & The Optimization of Biochemistry
              for over 15 years. He has applied this science age-related chronic
              conditions. Dr. Rozakis won the advancements in healthcare award
              in Cleveland, Ohio (beating out the Cleveland Clinic) in 2015 for
              his work in Advanced Wellness and advocates for this approach to
              health care to his patients and colleagues.
            </p>
            <p className="text-center text-lg-start ff_roboto fw_400 fs_xsm2 clr_white2 opacity_08">
              Dr. Rozakis pioneered the field of Lasik refractive surgery,
              phakic refractive lenses, and the use of hormones and other
              advanced testing to treat macular degeneration, migraine,
              parkinson's, arthritis, insomnia, menopause, low testosterone,
              auto immune disease and other age-related chronic conditions.
            </p>
          </Col>
        </Row>
        {/* second section */}
        <Row className="pt-5 flex-column-reverse flex-lg-row position-relative">
          <div className="back_shadow shadow_animation position-absolute bottom-0 start-50 team_2_translate"></div>
          <div className="back_shadow shadow_animation position-absolute bottom-0 end-0 team_2_translate_bottom"></div>
          <Col lg={6} xs={12} data-aos="zoom-in">
            <p className="fw_500 text-center text-lg-start clr_white ff_plus fs_lg">
              Brian Bakke, Ph.D.
            </p>
            <p className="text-center text-lg-start ff_roboto fw_400 fs_xsm2 clr_white2 opacity_08">
              Dr. Bakke also holds a master’s degree in human nutrition from
              Columbia University. His master’s thesis work focused on studying
              the clinical nutrition practice patterns used by eye professionals
              in the prevention and treatment of Age-Related Macular
              Degeneration (AMD).
            </p>
            <p className="text-center text-lg-start ff_roboto fw_400 fs_xsm2 clr_white2 opacity_08">
              Prior to partnering with the Advanced Wellness Program through
              Investihealth, Dr. Bakke spent 6 years working as chief science
              officer with a medical consulting company. His work as chief
              science officer focused on collaborating with primary care
              physicians in developing personalized nutrition and bioidentical
              hormone based care plans for improving clinical outcomes for
              patients with complex medical conditions. Previously, Dr. Bakke
              spent 7 years working with the multi- national chemistry,
              biotechnology and life science companies BASF and Syngenta as a
              senior chemist.
            </p>
          </Col>
          <Col
            lg={6}
            xs={12}
            className="p-4 d-flex justify-content-center"
            data-aos="zoom-in-up"
          >
            <div className="position-relative team_2_side_box">
              <img
                src={team_2}
                alt="team_1"
                className="team_img_w position-relative z-2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
