import React from "react";
import { Container } from "react-bootstrap";
import plus from "../assets/image/svg/scrool_plus.svg";
import eye from "../assets/image/svg/side_eye.svg";
export const Biochemistry = () => {
  return (
    <div className="bg_black mb-lg-5 py-5 mt_-1">
      <Container className="bio_shadow_md container" data-aos="flip-down">
        <div className="bio_shadow w-100 py-5 text-center position-relative d-flex flex-column align-items-center">
          <div className="back_shadow position-absolute boi_shadow_back"></div>
          {/* side images */}
          <img
            src={plus}
            alt="plus"
            className="position-absolute d-none d-md-block opt_plus rotate_animation"
          />
          <img
            src={plus}
            alt="plus"
            className="position-absolute bio_plus w_22 rotate_animation"
          />
          <img
            src={plus}
            alt="plus"
            className="position-absolute btn_plus w_22 rotate_animation"
          />
          <img
            src={eye}
            alt="plus"
            className="position-absolute opt_eye shadow_animation"
          />
          <img
            src={eye}
            alt="plus"
            className="position-absolute bio_eye shadow_animation"
          />
          <h2 className="ff_plus fw_500 fs_xl clr_white mb-0 pb-3">
            Optimize Biochemistry
          </h2>
          <p className="mb-0 opacity_07 pb-4 mb-4 fs_xsm2 fw_400 ff_roboto clr_white mx_585">
            Lectus adipiscing pulvinar et praesent justo libero luctus tortor. A
            semper feugiat non dui ut egestas eu. Euismod eu fames ante in
            vestibulum duis in odio. Amet pharetra mauris at pellentesque. Netus
            libero nulla eu id.
          </p>
          <button className="contact_btn position-relative btn_hover overflow-hidden border-0 rounded-pill p_15_30 clr_white ff_plus fw_600 fs_xsm">
            Book Call
          </button>
        </div>
      </Container>
    </div>
  );
};
