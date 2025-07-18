import styled from "@emotion/styled";
import React from "react";
import { ClimbingBoxLoader, GridLoader } from "react-spinners";
// window
const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function LoadingDiv() {
  // js

  //jsx
  return (
    <Loading>
      <ClimbingBoxLoader color="#9cfffc" size={100} speedMultiplier={3} />
    </Loading>
  );
}

export default LoadingDiv;
