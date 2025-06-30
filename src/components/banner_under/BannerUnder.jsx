import React from "react";
//css
import "../css/BannerUnder.css";

function BannerUnder() {
  return (
    <>
      <section className="banner_under">
        <ul>
          <li>
            <button className="banner_bt">
              <div className="bt_image">
                <img src="images/ic_activity.png" alt="#" />
              </div>
              <div className="bt_text">대외활동</div>
              <span className="bt_hot">HOT</span>
            </button>
          </li>
          <li>
            <button className="banner_bt">
              <div className="bt_image">
                <img src="images/ic_contest.png" alt="#" />
              </div>
              <div className="bt_text">공모전</div>
              {/* <!-- <span>HOT</span> --> */}
            </button>
          </li>
          <li>
            <button className="banner_bt">
              <div className="bt_image">
                <img src="images/ic_internship.png" alt="#" />
              </div>
              <div className="bt_text">인턴쉽</div>
              {/* <!-- <span>HOT</span> --> */}
            </button>
          </li>
          <li>
            <button className="banner_bt">
              <div className="bt_image">
                <img src="images/ic_education.png" alt="#" />
              </div>
              <div className="bt_text">교육·︎강연</div>
              {/* <!-- <span>HOT</span> --> */}
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default BannerUnder;
