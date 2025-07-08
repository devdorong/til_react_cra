import styled from "@emotion/styled";
import React from "react";

function TodoList({ completed, id, title, userId }) {
  //js
  const TodoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffa2ef;
    margin-bottom: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const TodoCompleted = styled.div`
    background-color: red;
    font-size: 13px;
    text-align: right;
    color: red;
  `;
  const TodoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const TodoUserid = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  //jsx
  return (
    <TodoCard>
      <TodoUserid>{userId}</TodoUserid>
      ID : {id}
      <TodoCompleted>{completed}</TodoCompleted>
      <TodoTitle>{title}</TodoTitle>
    </TodoCard>
  );
}

export default TodoList;
