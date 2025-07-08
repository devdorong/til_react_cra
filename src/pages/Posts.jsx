import React, { useState } from "react";
import PostList from "../components/posts/PostList";
import styled from "@emotion/styled";
import Button from "../components/ui/Button";
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export function Posts() {
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
          return "#ffb703";
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

  // js 자리
  // 변수의 값이 변하면 화면을 다시 RERendering 했으면 좋겠어.
  // React 는 변수값이 변하면 다시 랜더링 합니다.
  // 값이 변하면 리랜더링 하라는 문법을 제공합니다.
  //   let postsArr = []; // js 문법

  // React 에서 post 데이터 관리
  const [postsArr, setPostArr] = useState([]); // React
  // React 에서 데이터 로딩중 인 것을 관리
  let 지금 = "지금";
  const [상태, set상태] = useState("데이터호출시작");

  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();

      지금 = "js : 지금 데이터 로딩완료";
      set상태("React: 백엔드 데이터 로딩완료");
      console.log(result);
      //   postsArr = result;
      setPostArr(result);
    } catch (error) {
      console.log(error);
    }
  };
  // 데이터 컴포넌트로 출력하는 함수
  const makePostList = () => {
    let list = [];
    list = postsArr.map((item, index) => {
      return <PostList key={index}></PostList>;
    });
    return list;
  };
  // jsx 자리
  return (
    <Wrap>
      <h1>
        Posts 목록
        <div>
          <Button onClick={getPosts}>목록가져오기</Button>
          <Button onClick={() => setPostArr([])}>목록초기화</Button>
        </div>
      </h1>
      <div>
        {postsArr.map((item, index) => {
          return (
            <PostList
              id={item.id}
              title={item.title}
              body={item.body}
              userId={item.userId}
              key={index}
            />
          );
        })}
      </div>
    </Wrap>
  );
}

export default Posts;
