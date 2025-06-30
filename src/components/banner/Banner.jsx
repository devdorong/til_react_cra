import React from "react";
//css
import "../css/Banner.css";
function Banner() {
  return (
    <>
      <section className="banner">
        <div className="layout">
          <div className="banner_wrap">
            <div className="swiper sw_banner">
              <div className="swiper-wrapper">{/* <!-- Api 연동 --> */}</div>
            </div>
            <div className="banner_pagnation"></div>

            <button className="banner_slide_prev">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="banner_slide_next">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
