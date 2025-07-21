import React, { memo } from "react";

function Child() {
  // js
  console.log("Child : 리랜더링");

  // jsx
  return <div>Child</div>;
}

export default memo(Child);
