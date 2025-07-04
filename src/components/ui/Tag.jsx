import styled from "@emotion/styled";
import React from "react";

function Tag({ children, variant = "default", rounded = false, size = "md" }) {
  // js 자리
  const StyleTag = styled.span`
    display: inline-block;
    background-color: ${({ variant }) => {
      switch (variant) {
        case "success":
          return "#28a745";
        case "danger":
          return "#dc3545";
        case "warning":
          return "#ffc107";
        case "info":
          return "#17a2b8";
        default:
          return "#6c757d";
      }
    }};
    color: #fff;
    border-radius: ${({ rounded }) => (rounded ? "10px" : "2px")};
    padding: ${({ size }) => (size === "lg" ? "15px 12px" : "5px 8px")};
    font-size: ${({ size }) => (size === "lg" ? "14px" : "10px")};
    margin: 6px;
  `;
  // jsx 자리
  return (
    <StyleTag variant={variant} rounded={rounded} size={size}>
      #{children}
    </StyleTag>
  );
}

export default Tag;
