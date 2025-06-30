import React from "react";
//css
import "../header/Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="layout">
          <div className="header_top">
            <div className="header_left">
              <a href="#" className="header_left_logo">
                <img src="images/img_logo_ssgsag.svg" alt="슥삭 메인로고" />
              </a>
              <div className="header_left_menu">
                <ul>
                  <li>
                    <a href="#">내 일정</a>
                  </li>
                  <li>
                    <a href="#">
                      추천공고<span></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">슈퍼인턴</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header_right">
              <div className="header_right_link">
                <ul>
                  <li>
                    <img src="images/ic_upload.svg" alt="" />
                    <a href="#">공고등록</a>
                  </li>
                  <li>
                    <img src="images/ic_advertise.svg" alt="" />
                    <a href="#">광고문의</a>
                  </li>
                </ul>
              </div>
              <div className="header_right_login">로그인</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
