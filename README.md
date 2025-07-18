# useRef

- `html 태그를 보관해 두기(document.querySelector 처럼)`
- 화면에 보여주지 않는 변수를 보관하기
- 리랜더링 해도 값을 초기화 하지 않습니다

## DOM 요소 참조하기

- focus 주기

```jsx
import React, { useRef } from "react";

function App() {
  // 태그를 참조해서 보관하고 싶다.
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>포커스로 이동하기</h1>
      <input ref={inputRef} type="text" placeholder="아이디를 입력하세요." />
      <button onClick={handleClick}>입력창 이동</button>
    </div>
  );
}

export default App;
```

- 스크롤 하기

```jsx
import React, { useRef } from "react";
import { Button } from "./pages/todo/Todo.style";

function App() {
  // DOM 보관해 두는 리액트 변수
  const companyRef = useRef(null);
  const topRef = useRef(null);
  const handleClickCompany = () => {
    companyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={topRef}>
      <h1>스크롤 해보기</h1>
      <Button
        onClick={handleClickCompany}
        style={{ whiteSpace: "nowrap", overflow: "cover", padding: "5px 0px" }}
      >
        회사소개로 이동하기
      </Button>
      <div style={{ height: "100vh", backgroundColor: "hotpink" }}>인사말</div>
      <div
        ref={companyRef}
        style={{ height: "100vh", backgroundColor: "greenyellow" }}
      >
        회사소개
      </div>
      <Button
        onClick={handleClickTop}
        style={{ position: "fixed", right: 30, bottom: 30 }}
      >
        위로가기
      </Button>
    </div>
  );
}

export default App;
```

- form 태그 input 요소 초기화 하기

```jsx
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="값을 입력하세요" />
      <button onClick={handleClick}>값 비우기</button>
    </div>
  );
}

export default App;
```

- 비디오 제어하기(여기선 유튜브 링크만 가져옴)

```jsx
import React, { useRef } from "react";

function App() {
  const videoRef = useRef(null);
  const prevV = () => {
    videoRef.current.currentTime -= 10;
    videoRef.current.play();
  };
  const playV = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };
  const stopV = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  };
  const nextV = () => {
    videoRef.current.currentTime += 10;
    videoRef.current.play();
  };
  return (
    <div>
      <h1>video 제어</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1t67XscXapI?si=p4HwBWSODsF5qP96"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <video
        ref={videoRef}
        src="https://youtu.be/rxzCZZPBjX0"
        muted
        autoPlay
        controls
      ></video>
      <div>
        <button onClick={prevV}>10초전</button>
        <button onClick={playV}>play</button>
        <button onClick={stopV}>stop</button>
        <button onClick={nextV}>10초후</button>
      </div>
    </div>
  );
}

export default App;
```

## 변수 활용하기

- 값을 보관하고 리랜더링이 되어도 유지하기.

```jsx
import React, { useRef } from "react";

function App() {
  const countRef = useRef(0);
  const incre = () => {
    countRef.current++;
    console.log(countRef.current);
  };
  return (
    <div>
      <h1>값 보관 및 저장 {countRef.current}</h1>
      <button onClick={incre}>증가</button>
    </div>
  );
}

export default App;
```
