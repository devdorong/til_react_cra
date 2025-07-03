import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
import { CgEnter } from "react-icons/cg";

function Slide() {
  // js 자리

  // Emotion 관련
  // 기본형
  const BasicButton = styled.button``;
  // css 추가형
  const BasicUPButton = styled.button`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background-color: hotpink;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s;

    /* SCSS 적용 가능 */
    &:hover {
      background-color: red;
    }
  `;
  // props 로 동적인 즉, 실시간 스타일 변경하기
  const Box = styled.div`
    background-color: ${props => props.bg};
    height: 100px;
    width: ${props => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  `;
  //jsx 자리
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ textAlign: "center" }}>CSS-inJS 예제</h1>
      <BasicButton>기본버튼</BasicButton>
      <br />
      <br />
      <BasicUPButton>CSS적용버튼</BasicUPButton>
      <br />
      <br />
      <Box bg="red" width="200px">
        첫번째 박스
      </Box>
      <Box bg="skyblue">첫번째 박스</Box>
    </div>
  );
}

export default Slide;
