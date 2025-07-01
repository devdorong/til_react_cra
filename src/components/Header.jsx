import React from "react";
import BgObjred, { BgObj } from "./bg";
function Header() {
  // js 코드 자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }
  const bw_swiper = {
    message: <div>안녕하세요</div>,
  };
  const isLogin = true;

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? BgObj : BgObjred}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
      {bw_swiper.message}
    </div>
  );
}

export default Header;
