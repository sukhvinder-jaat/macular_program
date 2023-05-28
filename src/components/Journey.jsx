import React from "react";
import { Container } from "react-bootstrap";

const Journey = () => {
  return (
    <section className="py-5 position-relative overflow-hidden">
      <div className="back_shadow position-absolute top-0 start-0 shadow_animation"></div>
      <div className="back_shadow position-absolute top-50 end-0 shadow_animation"></div>
      <div className="back_shadow position-absolute jurny_last_shadow  shadow_animation"></div>
      <Container className="container pt-5">
        <p
          className="ff_plus pb-5 fw_400 fs_xl clr_white2 position-relative jurney_line text-center"
          data-aos="flip-up"
        >
          Our Journey
        </p>
        <div class="timeline-width pt-5" data-aos="flip-up">
          <div class="timeline">
            <div class="timeline_box  right" data-aos="fade-left">
              <div class="content box_time border_timr_right">
                <p class="ff_plus fw_500 fs_md clr_white">16 May, 2013</p>
                <p class="ff_roboto fw_400 pe-3 fs_xsm2 clr_white2 opacity_08">
                  My mother had macular degeneration for the last 15 years.
                  After conducting research on the disease, I successfully
                  treated her, and she showed improvement within six months.
                </p>
              </div>
            </div>
            <div class="timeline_box left ">
              <div
                class="content box_time border_timr_left"
                data-aos="fade-up-right"
              >
                <p class="ff_plus fw_500 fs_md clr_white">2015</p>
                <p class="ff_roboto fw_400 pe-3 fs_xsm2 clr_white2 opacity_08">
                  A patient named Paddy did not respond to injections for her
                  eye treatment. I conducted research and found an alternative
                  treatment that did not involve injections. As a result,
                  Paddy's vision improved, and she was able to see clearly.
                </p>
              </div>
            </div>
            <div class="timeline_box right" data-aos="fade-left">
              <div class="content box_time border_timr_right">
                <p class="ff_plus fw_500 fs_md clr_white">2017</p>
                <p class="ff_roboto fw_400 pe-3 fs_xsm2 pb-4 clr_white2 opacity_08">
                  In 2017, I studied migraines and worked with 69 patients.
                  Within three to six months of treatment, 54 patients showed
                  improvement in their vision.
                </p>
              </div>
            </div>
          </div>
          <div class="timeline_box  left" data-aos="fade-up-right">
            <div class="content box_time border_timr_left">
              <p class="ff_plus fw_500 fs_md clr_white">2021</p>
              <p class="ff_roboto fw_400 pe-3 fs_xsm2 clr_white2 opacity_08">
                In 2020, I studied 365 cases of eye disease and conducted
                research on them. In 2021, I conducted a test based on my
                research, and the results showed a recovery rate of 48% for dry
                AMD and 60% for wet AMD patients.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Journey;
