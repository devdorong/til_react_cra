import styled from "@emotion/styled";
import { useCounter } from "../hooks/useCounter";

const Wrap = styled.div`
  width: 300px;
  text-align: center;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CounterSample() {
  //js
  const { count, add, minus, reset } = useCounter(0);

  //jsx
  return (
    <Wrap>
      <h1>카운트 예제</h1>
      <h2>카운터 : {count}</h2>
      <ButtonWrap>
        <button onClick={add}>증가</button>
        <button onClick={minus}>감소</button>
        <button onClick={reset}>초기화</button>
      </ButtonWrap>
    </Wrap>
  );
}

export default CounterSample;
