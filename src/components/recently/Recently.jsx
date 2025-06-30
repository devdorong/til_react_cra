import React from "react";

//css
import "../css/Recently.css";

function Recently() {
  return (
    <>
      <section className="recently">
        <div className="recently_wrap">
          <p className="recently_top">
            <span>요즘 </span>핫한 공고만 찾고 있다면?
          </p>
          <div className="recently_bottom">
            <ul className="recently_list">{/* <!-- Api 연동 --> */}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recently;
