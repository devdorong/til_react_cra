import React from "react";

//css

import "../css/Cock.css";

function Cock() {
  return (
    <>
      <section className="cock">
        <div className="cock_wrap">
          <p className="cock_top">
            슥삭이<span> 콕 </span>집은 공고
          </p>
          <div className="cock_bottom">
            <ul className="cock_list">{/* <!-- Api 연동 --> */}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cock;
