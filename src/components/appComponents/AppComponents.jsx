import React from "react";

//css
import "../css/AppComponents.css";

function AppComponents() {
  return (
    <>
      <section className="app">
        <div className="app_wrap">
          <div className="app_item">
            <div className="app_image">
              <img src="images/img_install_guide.png" alt="#" />
            </div>
            <div className="app_text">
              <div className="app_text_top">
                <div className="app_top_main">슥삭 앱 설치 안내</div>
                <div className="app_top_sub">
                  슥삭 앱에서 더 편리하게 공고를 추천받고 일정을 관리할 수
                  있어요
                </div>
              </div>
              <div className="app_text_bottom">
                <div className="app_bottom_apple">
                  <a href="#">
                    <div className="apple_image">
                      <img src="images/ic_app_store.png" alt="#" />
                    </div>
                    <div className="apple_text">App Store에서 보기</div>
                  </a>
                </div>
                <div className="app_bottom_play">
                  <a href="#">
                    <div className="play_image">
                      <img src="images/ic_google_play.png" alt="#" />
                    </div>
                    <div className="play_text">Google Play에서 보기</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppComponents;
