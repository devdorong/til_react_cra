import styled from "@emotion/styled";
import React from "react";

function Chip({ label = "label" }) {
  // js 자리
  const StyledChip = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    background-color: #e0e0e0;
    border-radius: 16px;
    font-size: 14px;
    margin: 4px;

    span {
      margin-right: 8px;
    }
    button {
      background-color: #e0e0e0;
      border: none;
      cursor: pointer;
      font-weight: bold;
      color: #555;
    }
  `;
  // jsx 자리
  return (
    <StyledChip>
      <span>{label}</span>
      <button>X</button>
    </StyledChip>
  );
}

export default Chip;
