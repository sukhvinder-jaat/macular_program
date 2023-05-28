import React from "react";
import { Container } from "react-bootstrap";
import plus from "../assets/image/svg/scrool_plus.svg";
import eye from "../assets/image/svg/side_eye.svg";
import eye_big from "../assets/image/svg/about_big_eye.svg";
export const AboutHead = (props) => {
  return (
    <div className="about_shadow  overflow-hidden d-flex align-items-center justify-content-center">
      <Container className="container position-relative d-flex align-items-center justify-content-center">
        <div className="about_shadow_back position-absolute"></div>
        <img
          src={plus}
          alt="plus"
          className="about_plus position-absolute rotate_animation"
        />
        <img
          src={plus}
          alt="plus"
          className="about_plus_2 position-absolute rotate_animation"
        />
        <img
          src={eye}
          alt="eye"
          className="position-absolute about_eye animation_up"
        />
        <img
          src={eye_big}
          alt="eye_big"
          className="position-absolute d-none d-sm-block about_big_eye animation_up"
        />
        <p
          className="clr_white text-center position-relative z-2 mb-0 fw_600 fs_2xl ff_plus"
          data-aos="flip-up"
        >
          {props.text}
        </p>
      </Container>
    </div>
  );
};
