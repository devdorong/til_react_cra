import React from "react";
import { Link } from "react-router-dom";

function Header({ children, company, service, setIsLogin }) {
  return (
    <header>
      <div onClick={() => setIsLogin(true)}>로그인하기</div>
      <div onClick={() => setIsLogin(false)}>로그아웃하기</div>
      회사 이름 : {company}
      서비스 이름 : {service}
      {children}
      <Link to="/">😊로고</Link>
      <Link to="/about">❤소개</Link>
      <Link to="/about/mission">👏소개/미션</Link>
      <Link to="/about/team">👀소개/팀</Link>
      <Link to="/service">👌서비스</Link>
      <Link to="/blog">💕블로그</Link>
      <Link to="/blog/design/100">🤷‍♀️블로그 100번글</Link>
      <Link to="/blog/design/detail?id=200&user=아이유">
        🤷‍♂️블로그 100번글 상세내용
      </Link>
    </header>
  );
}

export default Header;
