import React from "react";
import hero_eye from "../assets/image/webp/hero_eye.webp";
import plus from "../assets/image/svg/scrool_plus.svg";
import side_eye from "../assets/image/svg/side_eye.svg";
import { Container } from "react-bootstrap";
export const Her = () => {
  return (
    <div>
      {/* hero section */}
      <Container className="container vh_91 flex-grow-1  position-relative">
        <a
          href="#"
          className="ff_plus text-uppercase opaciacity_07 z-2 text-white sapce_063 rotate_90 position-absolute start-0 side_text d-sm-block d-none mb-0 fs_xsm"
        >
          scroll
        </a>
        {/* plus */}
        <span className="position-absolute side_text_plus">
          <img src={plus} alt="plus" className="w-100 rotate_animation" />
        </span>
        {/* eye */}
        <img
          src={side_eye}
          alt="side eye"
          className="w_22 overflow-hidden shadow_animation position-absolute side_eye d-none d-sm-block"
        />
        <img
          src={plus}
          alt="plus"
          className="w_22 rotate_animation position-absolute side_plus_2 d-none d-sm-block"
        />
        <img
          src={plus}
          alt="plus"
          className="w_22 rotate_animation position-absolute side_plus_right"
        />
        <img
          src={side_eye}
          alt="side eye"
          className="position-absolute overflow-hidden shadow_animation side_eye_right"
        />
        <div className="bg_hero pb-5 vh_80 justify_content_center_1219 d-flex flex-column align-items-center pt-xl-5">
          <p className="ff_plus fw_600 pb-sm-4 pb-2 fs_2xl z_2 clr_white mx_630_md text-center pt-sm-5">
            Seeing life
            <span className="back_circle pb-1"> clearly, </span>with Macular
            Program
          </p>
          <span className="position-relative hero_eye_shadow z_2">
            <img src={hero_eye} alt="eye" className="w-100" />
            <div className="eye_side position-absolute animation_up ps-sm-2 p-1">
              <p className="mb-0 fw_500 fs_xsm ff_plus clr_white2 p-2">
                Certificated <span className="d-block">Method</span>
              </p>
            </div>
            <div className="eye_side2 position-absolute animation_up ps-sm-2 p-1">
              <p className="mb-0 fw_500 fs_xsm ff_plus clr_white2 p-2">
                No Injection <span className="d-block">Required</span>
              </p>
            </div>
          </span>
        </div>
        {/* shadow */}
        <div className="back_shadow shadow_animation d-sm-inline-block d-none  position-absolute bottom-0"></div>
        <div className="back_shadow d-sm-inline-block shadow_animation position-absolute back_shadow_hero_right"></div>
      </Container>
    </div>
  );
};
