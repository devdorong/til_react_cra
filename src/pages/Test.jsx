import React, { useState } from "react";

function Test() {
  //js
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    const temp = "할일이지요";
    setTodoList([...todoList, temp]);
  };
  //jsx
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>목록추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
