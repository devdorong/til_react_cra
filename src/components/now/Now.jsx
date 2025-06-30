import React from "react";

//css
import "../css/Now.css";

function Now() {
  return (
    <>
      <section className="now">
        <div className="now_wrap">
          <p className="now_top">
            <span>방금</span> 게시된 공고만 찾고 있다면?
          </p>
          <div className="now_bottom">
            <ul className="now_list"></ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Now;
