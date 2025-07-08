import React from "react";

function Test() {
  // js
  const handleFocus = () => {
    console.log("포커스 되었네요.");
  };
  const handleBlur = () => {
    console.log("포커스 해제 되었네요.");
  };
  // jsx
  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
}

export default Test;
