import React from "react";
import { useParams } from "react-router-dom";

function Design() {
  // 객체 구조 분해 할당
  const { id } = useParams();
  return <div>{id} 번째 Design</div>;
}

export default Design;
