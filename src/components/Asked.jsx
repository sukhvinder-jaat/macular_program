import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
export const Asked = () => {
  const [tabs, setTabs] = React.useState("tab1");
  const changeTabs = (tabe) => {
    setTabs(tabe.target.id);
  };
  return (
    <div className="bg_black mt_-1 mb-lg-5 mb-4 py-5">
      <Container className="py-lg-5 container">
        <p
          className="ff_plus clr_white opacity_09 fw_500 fs_xl mb-0 position-relative asked_line text-center"
          data-aos="zoom-out-up"
        >
          Frequently Asked Questionss
        </p>
        <Row className="pt-5">
          <Col lg={4} xs={12} className="pt-4" data-aos="zoom-out-right">
            <div
              id="tab1"
              onClick={changeTabs}
              className={
                tabs === "tab1"
                  ? "asked_btn w_custom_tabs position-relative btn_hover overflow-hidden d-flex align-items-center justify-content-between asked_padding"
                  : "bg-transparent w_custom_tabs d-flex align-items-center justify-content-between asked_padding"
              }
            >
              <p
                id="tab1"
                onClick={changeTabs}
                className={
                  tabs === "tab1"
                    ? "clr_white2 fw_600 mb-0 ff_roboto fs_sm"
                    : "clr_white2 fw_600 mb-0 ff_roboto fs_sm"
                }
                s
              >
                Customer Questions
              </p>
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15039 19.1C0.900391 18.85 0.775391 18.554 0.775391 18.212C0.775391 17.87 0.900391 17.5743 1.15039 17.325L8.47539 10L1.12539 2.65C0.892057 2.41667 0.775391 2.125 0.775391 1.775C0.775391 1.425 0.900391 1.125 1.15039 0.875C1.40039 0.625 1.69639 0.5 2.03839 0.5C2.38039 0.5 2.67606 0.625 2.92539 0.875L11.3254 9.3C11.4254 9.4 11.4964 9.50833 11.5384 9.625C11.5804 9.74167 11.6011 9.86667 11.6004 10C11.6004 10.1333 11.5794 10.2583 11.5374 10.375C11.4954 10.4917 11.4247 10.6 11.3254 10.7L2.90039 19.125C2.66706 19.3583 2.37939 19.475 2.03739 19.475C1.69539 19.475 1.39972 19.35 1.15039 19.1Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <div
              id="tab2"
              onClick={changeTabs}
              className={
                tabs === "tab2"
                  ? "asked_btn w_custom_tabs position-relative btn_hover overflow-hidden d-flex align-items-center justify-content-between asked_padding mt-3"
                  : "bg-transparent w_custom_tabs d-flex align-items-center justify-content-between asked_padding mt-3"
              }
            >
              <p
                id="tab2"
                onClick={changeTabs}
                className={
                  tabs === "tab2"
                    ? "clr_white2 fw_600 mb-0 ff_roboto fs_sm"
                    : "clr_white2 fw_600 mb-0 ff_roboto fs_sm"
                }
                s
              >
                Customer Questions
              </p>
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15039 19.1C0.900391 18.85 0.775391 18.554 0.775391 18.212C0.775391 17.87 0.900391 17.5743 1.15039 17.325L8.47539 10L1.12539 2.65C0.892057 2.41667 0.775391 2.125 0.775391 1.775C0.775391 1.425 0.900391 1.125 1.15039 0.875C1.40039 0.625 1.69639 0.5 2.03839 0.5C2.38039 0.5 2.67606 0.625 2.92539 0.875L11.3254 9.3C11.4254 9.4 11.4964 9.50833 11.5384 9.625C11.5804 9.74167 11.6011 9.86667 11.6004 10C11.6004 10.1333 11.5794 10.2583 11.5374 10.375C11.4954 10.4917 11.4247 10.6 11.3254 10.7L2.90039 19.125C2.66706 19.3583 2.37939 19.475 2.03739 19.475C1.69539 19.475 1.39972 19.35 1.15039 19.1Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <hr className="asked_line2 mt-3" />
          </Col>
          <Col lg={8} xs={12} data-aos="zoom-out-left">
            <div className="ps-lg-5 px-2">
              <div className={tabs === "tab1" ? "d-block" : "d-none"}>
                <Accordion>
                  <Accordion.Item eventKey="0" className="bg_black">
                    <Accordion.Header className="bg-transparent ff_plus">
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="ff_plus">
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="ff_plus">
                      Do Blood Tests Improve?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="ff_plus">
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="ff_plus">
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="ff_plus">
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              {/* second */}
              <div className={tabs === "tab2" ? "d-block" : "d-none"}>
                <Accordion>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="ff_plus">
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0" className="bg_black">
                    <Accordion.Header className="bg-transparent ff_plus">
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="ff_plus">
                      Do Blood Tests Improve?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="ff_plus">
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="ff_plus">
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="ff_plus">
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body className="bg-transparent clr_white2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
