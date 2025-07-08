import React, { useState } from "react";
import TodoList from "../components/todos/TodoList";
import Button from "../components/ui/Button";
import styled from "@emotion/styled";
import { Wrap } from "./Posts";

function Todos() {
  const Button = styled.button`
    background-color: ${props => {
      // 비활성화 된 경우
      if (props.disabled) return "#ccc";

      switch (props.variant) {
        case "primary":
          return "#007bff";
        case "danger":
          return "#dc3545";
        case "success":
          return "#28a745";
        default:
          return "#ffa2ef";
      }
    }};

    color: white;
    padding: ${props => (props.size === "lg" ? "12px 24px" : "8px 16px")};
    border: none;
    border-radius: 4px;
    font-size: ${props => (props.size === "lg" ? "18px" : "14px")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    margin: 5px;
    opacity: ${props => (props.disabled ? 0.6 : 1.0)};

    &:hover {
      opacity: ${props => (props.disabled ? 0.6 : 0.8)};
    }
  `;
  // js
  const [todosData, settodosData] = useState([]);
  const getTodos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      console.log("Todos 데이터");
      settodosData(result);
    } catch (error) {
      console.log(error);
    }
  };
  //   getTodos();
  // jsx
  return (
    <Wrap>
      <h1>
        Todos 목록
        <div>
          <Button onClick={getTodos}>목록 가져오기</Button>
          <Button onClick={() => settodosData([])}>목록초기화</Button>
        </div>
      </h1>
      <div>
        {todosData.map((item, index) => {
          return (
            <TodoList
              completed={item.completed}
              id={item.id}
              title={item.title}
              userId={item.userId}
              key={index}
            />
          );
        })}
      </div>
    </Wrap>
  );
}

export default Todos;
