import React, { useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test() {
  // js 자리

  // 변수 관리
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pw: "",
  });

  // 이벤트 처리함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = e => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = e => {
    // 웹브라우저 새로 고침 방지
    e.preventDefault();
    if (userId === "") {
      setErrorMessage("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      setErrorMessage("이메일을 입력하세요.");
      return;
    }
    if (userPassword === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return;
    }
    console.log("백엔드로 데이터 보내요~");
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);

    // 객체로 보내기
    setFormData({ id: userId, email: userEmail, pw: userPassword });
    setErrorMessage("");
  };

  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        formData={formData}
        setFormData={setFormData}
        errorMessage={errorMessage}
        handleUserId={handleUserId}
        handleUserEmail={handleUserEmail}
        handleUserPassword={handleUserPassword}
        handleSubmit={handleSubmit}
      ></LoginForm>
    </div>
  );
}

export default Test;
