import React, { useState } from "react";
import CommentList from "../components/comments/CommentList";
import Button from "../components/ui/Button";
import styled from "@emotion/styled";
import { Wrap } from "./Posts";

function Comments() {
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
          return "#83bdff";
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
  //js
  const [commentsData, setcommentsData] = useState([]);
  const getCommets = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      console.log("Comments 데이터");
      console.log(result);
      setcommentsData(result);
    } catch (error) {
      console.log(error);
    }
  };
  //   getCommets();
  //jsx
  return (
    <Wrap>
      <h1>
        Comments 목록
        <div>
          <Button onClick={getCommets}>목록 가져오기</Button>
          <Button
            onClick={() => {
              setcommentsData([]);
            }}
          >
            목록 초기화
          </Button>
        </div>
      </h1>
      <div>
        {commentsData.map((item, index) => {
          return (
            <CommentList
              body={item.body}
              email={item.email}
              id={item.id}
              name={item.name}
              postId={item.postId}
              key={index}
            />
          );
        })}
      </div>
    </Wrap>
  );
}

export default Comments;
