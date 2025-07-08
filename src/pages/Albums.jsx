import React, { useState } from "react";
import AlbumList from "../components/albums/AlbumList";
import Button from "../components/ui/Button";
import styled from "@emotion/styled";
import { Wrap } from "./Posts";

function Albums() {
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
          return "#adfd88";
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
  const [albumsData, setalbumsData] = useState([]);
  const getAlbums = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();
      console.log("Albums 데이터");
      setalbumsData(result);
    } catch (error) {
      console.log(error);
    }
  };
  //   getAlbums();
  // jsx 자리
  return (
    <Wrap>
      <h1>
        Albums 목록
        <div>
          <Button onClick={getAlbums}>목록 가져오기</Button>
          <Button onClick={() => setalbumsData([])}>목록초기화</Button>
        </div>
      </h1>
      <div>
        {albumsData.map((item, index) => {
          return (
            <AlbumList
              userId={item.userId}
              id={item.id}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>
    </Wrap>
  );
}

export default Albums;
