import styled from "@emotion/styled";
import { useContext } from "react";
import {
  EmotionContext,
  EmotionContextProvider,
} from "./contexts/EmotionContext";
import colors from "./styles/colors";

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  width: 80px;
  height: 80px;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ emotion }) => colors.emotion[emotion]?.base || "#000"};
  border: none;
  border-radius: 8px;
  color: #fff;
  :hover {
    background-color: ${({ emotion }) =>
      colors.emotion[emotion]?.hover || "#000"};
  }
  cursor: pointer;
`;

function Emotion() {
  const { emotion, dispatch, isSelected, setIsSelected } =
    useContext(EmotionContext);
  const bgColors = {
    happy: "yellow",
    sad: "blue",
    angry: "red",
  };
  const message = {
    happy: `지금 나는 😊 행복해요!`,
    sad: `지금 나는 😥 슬퍼요`,
    angry: `지금 나는 🤬 화났어요!`,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColors[emotion],
        height: "100vh",
        transition: "0.3s",
      }}
    >
      <h1>오늘의 기분 등록하기</h1>
      <h2>{message[emotion]}</h2>
      <ButtonWrap>
        <Button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "HAPPY" });
            setIsSelected(true);
          }}
          emotion="happy"
        >
          <img src="./images/happy_icon.svg" alt="" />
        </Button>
        <Button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "SAD" });
            setIsSelected(true);
          }}
          emotion="sad"
        >
          <img src="./images/sad_icon.svg" alt="" />
        </Button>
        <Button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "ANGRY" });
            setIsSelected(true);
          }}
          emotion="angry"
        >
          <img src="./images/angry.svg" alt="" />
        </Button>
      </ButtonWrap>
    </div>
  );
}

function App() {
  return (
    <EmotionContextProvider>
      <Emotion />
    </EmotionContextProvider>
  );
}

export default App;
