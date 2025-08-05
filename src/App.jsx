import styled from "@emotion/styled";
import CounterSample from "./components/CounterSample";
import { useBoolean } from "./hooks/useBoolean";
import useMessage from "./hooks/useMessage";
import { useTitle } from "./hooks/useTitle";
import { useWindowSize } from "./hooks/useWindowSize";
import NickNameForm from "./components/NickNameForm";
import AddressForm from "./components/AddressForm";
const Wrap = styled.div`
  max-width: 1980;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AppButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AppButton = styled.button`
  background-color: aliceblue;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
`;

function App() {
  //js

  useTitle("첫화면");
  const { value, toggle, setTrue, setFalse } = useBoolean(false);
  const { showMessage } = useMessage();
  const { width, height } = useWindowSize();

  //jsx
  return (
    <Wrap>
      <div>
        <CounterSample />
      </div>
      <div>
        <h2>테마적용 {value ? "black" : "white"}</h2>
        <AppButtonWrap>
          <AppButton onClick={toggle}>테마 토글</AppButton>
          <AppButton onClick={setTrue}>테마적용</AppButton>
          <AppButton onClick={setFalse}>테마해제</AppButton>
        </AppButtonWrap>
      </div>
      <div>
        <button onClick={() => showMessage("반가워요")}>메시지 출력하기</button>
      </div>
      <div>
        <div>너비 : {width}</div>
        <div>높이 : {height}</div>
      </div>
      <div>
        <h2>입력창 처리</h2>
        <NickNameForm />
        <AddressForm />
      </div>
    </Wrap>
  );
}

export default App;
