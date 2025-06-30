import React from "react";

function Popup() {
  return (
    <>
      <div className="popup">
        <div className="popup_content">
          <p className="popup_text">
            <b>⚠️ 안내드립니다</b>
          </p>
          <br />
          <p>
            이 사이트는 🧑‍💻 개인 학습 목적으로 제작된 클론코딩 프로젝트입니다.
          </p>
          <p>
            실제 서비스가 아닌, 프론트엔드 개발 연습을 위해 구현된 모작입니다.
          </p>
          <br />
          <p>💡 클론 과정에서 디자인과 기능을 참고하였으며,</p>
          <p>상업적 목적 없이 포트폴리오 용도로만 활용됩니다.</p>
          <br />
          <p>🛑 원작 사이트의 저작권은 각 소유자에게 있으며,</p>
          <p>이 프로젝트는 그와 무관함을 명확히 밝힙니다.</p>
          <br />
          <p>📬 문의: dev.dorong@gmail.com</p>
          <p>💻 GitHub: github.com/devdorong</p>
          <button className="popup_close">X</button>
        </div>
      </div>
    </>
  );
}

export default Popup;
