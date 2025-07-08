import React, { useState } from "react";
import PhotoList from "../components/photos/PhotoList";
import Button from "../components/ui/Button";
import styled from "@emotion/styled";
import { Wrap } from "./Posts";

function Photos() {
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
          return "#e2afff";
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
  const [photosData, setphotosData] = useState([]);
  const getPhotos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      console.log("Photos 데이터");
      setphotosData(result);
    } catch (error) {
      console.log(error);
    }
  };
  //   getPhotos();
  // jsx 자리
  return (
    <Wrap>
      <h1>
        Photos 목록
        <div>
          <Button onClick={getPhotos}>목록 가져오기</Button>
          <Button onClick={() => setphotosData([])}>목록초기화</Button>
        </div>
      </h1>
      <div>
        {photosData.map((item, index) => {
          return (
            <PhotoList
              albumid={item.albumId}
              id={item.id}
              thumbnailurl={item.thumbnailUrl}
              title={item.title}
              url={item.url}
              key={index}
            />
          );
        })}
      </div>
    </Wrap>
  );
}

export default Photos;
