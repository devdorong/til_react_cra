import React, { useEffect, useState } from "react";
// window
function Test() {
  //js
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("안녕 나는 처음이지?");
    return () => {
      console.log("다음 생에 만나요");
    };
  }, []);
  useEffect(() => {
    console.log(`${count} 이군요. 하하`);
    return () => {
      console.log("잘계세요.");
    };
  }, [count]);
  //jsx
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 999999999999)}>점수</button>
    </div>
  );
}

export default Test;
