import styled from "@emotion/styled";
import React from "react";
import { InputGroup, InputStyled, Label } from "./InputUi.styles";
// 전역자리 (window) : 새로고침 반영 안됨.
// styled 코드 자리

function InputUi({ id, type, value, name, placeholder, label, onChange }) {
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
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputUi;
