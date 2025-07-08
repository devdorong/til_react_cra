import styled from "@emotion/styled";
import React from "react";

function PostList({ id, title, body, userId }) {
  // js
  const PostCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin-bottom: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PostTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PostBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const PostUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  // jsx
  return (
    <PostCard>
      <PostUser>
        <b>User</b> :{userId}
      </PostUser>
      <b>Id</b> : {id}
      <PostTitle>
        <b>title</b> : {title}
      </PostTitle>
      <PostBody>
        <b>body</b> : {body}
      </PostBody>
      <br />
    </PostCard>
  );
}

export default PostList;
