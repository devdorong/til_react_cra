import styled from "@emotion/styled";
import React from "react";

function CommentList({ body, email, id, name, postId }) {
  //js
  const CommentCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #83bdff;
    margin-bottom: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const CommentPostId = styled.h2`
    padding-top: 10px;
  `;
  const CommentName = styled.div`
    font-size: 14px;
    text-align: left;
    color: #000;
    padding-top: 10px;
  `;
  const CommentEmail = styled.div`
    padding-top: 10px;
  `;
  const CommentBody = styled.div`
    padding-top: 10px;
  `;
  //jsx
  return (
    <CommentCard>
      <b>ID : {id}</b>
      <CommentPostId>
        <b>postId</b> : {postId}
      </CommentPostId>
      <CommentName>
        <b>name</b> : {name}
      </CommentName>
      <CommentEmail>
        <b>email</b> : {email}
      </CommentEmail>
      <CommentBody>
        <b>body</b> : {body}
      </CommentBody>
    </CommentCard>
  );
}

export default CommentList;
