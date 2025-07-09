import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

function LoginForm({
  userId,
  setUserId,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  formData,
  setFormData,
  errorMessage,
  handleUserId,
  handleUserEmail,
  handleUserPassword,
  handleSubmit,
}) {
  //js
  const FormContainer = styled.div`
    width: 100%;
    padding: 25px;
    max-width: 800px;
    margin: 30px auto;
    border-radius: 16px;
    background-color: #fafafa;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  `;
  const ErrorText = styled.div`
    color: #f00;
    margin-top: 10px;
    font-size: 12px;
  `;
  //jsx
  return (
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <InputField
          type="text"
          value={userId}
          placeholder="아이디를 입력하세요."
          onChange={e => handleUserId(e)}
        />
        <InputField
          type="email"
          value={userEmail}
          placeholder="이메일을 입력하세요"
          onChange={e => handleUserEmail(e)}
        />
        <InputField
          type="password"
          value={userPassword}
          placeholder="비밀번호를 입력하세요."
          onChange={e => handleUserPassword(e)}
        />
        <br />
        <button type="submit">로그인</button>
      </form>

      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
