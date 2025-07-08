import styled from "@emotion/styled";
import React from "react";

function PhotoList({ albumid, id, thumbnailurl, title, url }) {
  //js
  const PhotoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #e2afff;
    margin-bottom: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PhotoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotoAlbumid = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  const PhotoThumbnailurl = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  const PhotoUrl = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  //jsx
  return (
    <PhotoCard>
      ID : {id}
      <PhotoAlbumid>{albumid}</PhotoAlbumid>
      <PhotoTitle>{title}</PhotoTitle>
      <PhotoThumbnailurl>{thumbnailurl}</PhotoThumbnailurl>
      <PhotoUrl>{url}</PhotoUrl>
    </PhotoCard>
  );
}

export default PhotoList;
