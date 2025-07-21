import React, { useCallback, useState } from "react";
import Child from "./Child";
// window

function App() {
  console.log("APP : 리랜더링");
  // js
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // jsx
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>함수 실행</button>
      <Child />
    </div>
  );
}

export default App;
