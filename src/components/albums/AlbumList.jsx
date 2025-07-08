import styled from "@emotion/styled";
import React from "react";

function AlbumList({ id, title, userId }) {
  //js
  const AlbumCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #adfd88;
    margin-bottom: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const AlbumTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const AlbumUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  //jsx
  return (
    <AlbumCard>
      <AlbumUser>User : {userId}</AlbumUser>
      ID : {id}
      <AlbumTitle>{title}</AlbumTitle>
    </AlbumCard>
  );
}

export default AlbumList;
