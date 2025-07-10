import styled from "@emotion/styled";
import React from "react";
// 전역자리 (window) : 새로고침 반영 안됨.
// styled 코드 자리
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Label = styled.label`
  font-size: 11px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  min-width: 60px;
`;
const InputStyled = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;
function InputUi({ id, type, value, name, placeholder, label }) {
  //js

  //jsx
  return (
    <InputGroup>
      <Label htmlFor={label}>{label}</Label>
      <InputStyled
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        id={id}
      />
    </InputGroup>
  );
}

export default InputUi;
