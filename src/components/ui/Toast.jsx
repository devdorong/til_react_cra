import styled from "@emotion/styled";
import React from "react";

function Toast({ message = "Please Message", bg = "#ccc" }) {
  // js코드 작성
  const StyledToast = styled.div`
    z-index: 99999;
    position: fixed;
    bottom: 50%;
    right: 50%;
    background-color: ${props => props.bg};
    color: #fff;
    padding: 12px 20px;
    border-radius: 18px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  `;
  // jsx 작성
  return <StyledToast bg={bg}>{message}</StyledToast>;
}

export default Toast;
