import styled from "@emotion/styled";
import React from "react";
// window
const NOTFOUND = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  background-color: #ccc;
  width: 1980px;
  height: 950px;
`;
function NotFound() {
  // js

  //jsx
  return (
    <NOTFOUND>
      <span>404</span>
      <span>NotFound</span>
    </NOTFOUND>
  );
}

export default NotFound;
