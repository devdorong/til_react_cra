# useEffect

## 1. 특징

- 리랜더링에서 제외되는 Hook
- Hook 은 우선 `컴포넌트에서 자동 실행되는 함수`
- useState 에서 만든 리액트 변수 출력, 즉, 확인하기
- 백엔드 비동기 통신, 즉, fetch 함수를 호출하기

## 2. 작동이 되는 즉, 실행이 되는 3가지 경우

### 2.1. 컴포넌트가 화면에 보여질 때 (랜더링)

- 딱 한번만 실행됩니다.

```js
useEffect(() => {
  // 딱 한번만 행되면 좋겠다.
}, []);
```

### 2.2. 계속 실행되는 경우 (리 랜더링)

```js
useEffect(() => {
  // 계속 하고 싶은일.
}, [리액트변수]);
```

### 2.3. 컴포넌트가 사라질 때 (화면에서 제거될때)

- 클린업 함수

```js
useEffect(() => {
  // 딱 한번만 실행하기
  // 딱 한번만 실행하기
  // 딱 한번만 실행하기
  return () => {
    // 사라질때 하고 싶은일
  };
}, []);
```

```js
useEffect(() => {
  // 계속 실행하기
  // 계속 실행하기
  // 계속 실행하기
  return () => {
    // 사라질때 하고 싶은일
  };
}, [리액트변수]);
```

## 3. 이해를 해보자

```js
useEffect(() => {
  widown.addEventListenr("resize", function () {
    // 실행할일
  });
  widown.addEventListenr("scroll", function () {
    // 실행할일
  });

  // 클린업 함수
  return () => {
    widown.removeEventListenr("resize", function () {
      // 실행할일
    });
    widown.removeEventListenr("scroll", function () {
      // 실행할일
    });
  };
}, []);
```

```jsx
import React, { useEffect, useState } from "react";
// window
function Test() {
  //js
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("안녕 나는 처음이지?");
    return () => {
      console.log("다음 생에 만나요");
    };
  }, []);
  useEffect(() => {
    console.log(`${count} 이군요. 하하`);
    return () => {
      console.log("잘계세요.");
    };
  }, [count]);
  //jsx
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>점수</button>
    </div>
  );
}

export default Test;
```

# useEffect 와 useState, Event 종합예제

## 1. useState 로 변수 설정

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);

  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form>
          <InputWrap>
            <Label>제목</Label>
            <Input name="title" type="text" placeholder="제목을 입력하세요." />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea name="content" />
          </InputWrap>
          <div>
            <Button type="submit">등록</Button>
          </div>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <Section>
        <Form>
          <InputWrap>
            <Label>선택한 제목</Label>
            <Input name="title" type="text" />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <TextArea name="content" />
          </InputWrap>
          <div>
            <Button type="submit">내용 수정</Button>
          </div>
        </Form>
      </Section>
      <SubTitle>할일목록</SubTitle>
      <Section>
        <TodoItem>
          <TodoContent>아이디:타이틀</TodoContent>
          <TodoButtonWrap>
            <Button>수정</Button>
            <Button>삭제</Button>
          </TodoButtonWrap>
        </TodoItem>
      </Section>
    </Container>
  );
}

export default Todo;
```

## 2. useState 각 요소 연결하기

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);

  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea name="content" value={todo.content} />
          </InputWrap>
          <div>
            <Button type="submit">등록</Button>
          </div>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <Section>
        <Form>
          <InputWrap>
            <Label>선택한 제목</Label>
            <Input name="title" value={editTodo.title} type="text" />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <TextArea name="content" value={editTodo.content} />
          </InputWrap>
          <div>
            <Button type="submit">내용 수정</Button>
          </div>
        </Form>
      </Section>
      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem key={item.id}>
            <TodoContent>
              {item.id}:{item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button>수정</Button>
              <Button>삭제</Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

## 3. Event 연결하여 값 업데이트 하기

### 3.1. 할일 추가 이벤트 처리

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);

  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // todoList 를 업데이트 합니다.
    // [ {id:0, title:"", conten:""}]
    setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
    setTodo(initTodo);
  };

  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              value={todo.content}
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">등록</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <Section>
        <Form>
          <InputWrap>
            <Label>선택한 제목</Label>
            <Input name="title" value={editTodo.title} type="text" />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <TextArea name="content" value={editTodo.content} />
          </InputWrap>
          <InputButton>
            <Button type="submit">내용 수정</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem key={item.id}>
            <TodoContent>
              {item.id}번째 할일 제목 : {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button>수정</Button>
              <Button>삭제</Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

### 3.2. 할일 목록 이벤트 처리

- 삭제, 수정 처리

#### 3.2.1. 목록 삭제 이벤트 처리

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);

  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // todoList 를 업데이트 합니다.
    // [ {id:0, title:"", conten:""}]
    setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
    setTodo(initTodo);
  };

  // 목록에서 할일 목록 삭제하기 이벤트
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾아서 제거하고, 목록을 업데이트
    const tempList = todoList.filter(item => item.id !== id);
    setTodoList(tempList);
  };

  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              value={todo.content}
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">등록</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <Section>
        <Form>
          <InputWrap>
            <Label>선택한 제목</Label>
            <Input name="title" value={editTodo.title} type="text" />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <TextArea name="content" value={editTodo.content} />
          </InputWrap>
          <InputButton>
            <Button type="submit">내용 수정</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem key={item.id}>
            <TodoContent>
              {item.id}번째 할일 제목 : {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button>수정</Button>
              <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

### 3.2.2 목록 수정 이벤트 처리

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);

  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // todoList 를 업데이트 합니다.
    // [ {id:0, title:"", conten:""}]
    setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
    setTodo(initTodo);
  };

  // 목록에서 할일 목록 수정하기 이벤트
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 TodoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
  };

  // 목록에서 할일 목록 삭제하기 이벤트
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾아서 제거하고, 목록을 업데이트
    const tempList = todoList.filter(item => item.id !== id);
    setTodoList(tempList);
  };
  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              value={todo.content}
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">등록</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <Section>
        <Form>
          <InputWrap>
            <Label>선택한 제목</Label>
            <Input name="title" value={editTodo.title} type="text" />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <TextArea name="content" value={editTodo.content} />
          </InputWrap>
          <InputButton>
            <Button type="submit">내용 수정</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem key={item.id}>
            <TodoContent>
              {item.id}번째 할일 제목 : {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button onClick={() => handleTodoListSelect(item.id)}>
                수정
              </Button>
              <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

### 3.2.3 할일 수정 이벤트 처리

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);

  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // todoList 를 업데이트 합니다.
    // [ {id:0, title:"", conten:""}]
    setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
    setTodo(initTodo);
  };

  // 목록에서 할일 목록 수정하기 이벤트
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 TodoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
  };

  // 목록에서 할일 목록 삭제하기 이벤트
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾아서 제거하고, 목록을 업데이트
    const tempList = todoList.filter(item => item.id !== id);

    setTodoList(tempList);
  };

  // 수정 이벤트 처리
  const handleEditChange = e => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const tempArr = todoList.map(item => {
      if (item.id === editTodo.id) {
        // 현재 수정되고 있던 할일 처리
        return { ...editTodo };
      } else {
        // 나머지 할일들
        return item;
      }
    });
    setTodoList(tempArr);
  };
  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              value={todo.content}
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">등록</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <Section>
        <Form onSubmit={handleEditSubmit}>
          <InputWrap>
            <Label>선택한 제목</Label>
            <Input
              name="title"
              value={editTodo.title}
              onChange={handleEditChange}
              type="text"
            />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <TextArea
              name="content"
              value={editTodo.content}
              onChange={handleEditChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">내용 수정</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem key={item.id}>
            <TodoContent>
              {item.id}번째 할일 제목 : {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button onClick={() => handleTodoListSelect(item.id)}>
                수정
              </Button>
              <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

## 4. 추가 기능

- 목록이 없으면 `목록이 없습니다.` 메시지 출력
- 내용 수정이 아니라면 `상세보기 영역 안보이게` 처리
- 사용자가 추가한 내용을 저장해두기

### 4.1. 목록 메시지 출력하기

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const TodoListMessage = styled.p`
  text-align: center;
  font-size: 11px;
  color: #ff0000;
  padding: 15px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);

  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // todoList 를 업데이트 합니다.
    // [ {id:0, title:"", conten:""}]
    setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
    setTodo(initTodo);
  };

  // 목록에서 할일 목록 수정하기 이벤트
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 TodoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
  };

  // 목록에서 할일 목록 삭제하기 이벤트
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾아서 제거하고, 목록을 업데이트
    const tempList = todoList.filter(item => item.id !== id);

    setTodoList(tempList);
  };

  // 수정 이벤트 처리
  const handleEditChange = e => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const tempArr = todoList.map(item => {
      if (item.id === editTodo.id) {
        // 현재 수정되고 있던 할일 처리
        return { ...editTodo };
      } else {
        // 나머지 할일들
        return item;
      }
    });
    setTodoList(tempArr);
  };
  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              value={todo.content}
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">등록</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <Section>
        <Form onSubmit={handleEditSubmit}>
          <InputWrap>
            <Label>선택한 제목</Label>
            <Input
              name="title"
              value={editTodo.title}
              onChange={handleEditChange}
              type="text"
            />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <TextArea
              name="content"
              value={editTodo.content}
              onChange={handleEditChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">내용 수정</Button>
          </InputButton>
        </Form>
      </Section>
      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.length === 0 ? (
          <TodoListMessage>등록된 할 일이 없습니다.</TodoListMessage>
        ) : (
          todoList.map(item => (
            <TodoItem key={item.id}>
              <TodoContent>
                {item.id}번째 할일 제목 : {item.title}
              </TodoContent>
              <TodoButtonWrap>
                <Button onClick={() => handleTodoListSelect(item.id)}>
                  수정
                </Button>
                <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
              </TodoButtonWrap>
            </TodoItem>
          ))
        )}
      </Section>
    </Container>
  );
}

export default Todo;
```

### 4.2. 수정 중일 때만 수정 내용 보이기

- 수정창이 보이는 부분에 리액트 변수 하나 추가 처리
- `const [isEdit, setIsEdit] = useState(false);`

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const TodoListMessage = styled.p`
  text-align: center;
  font-size: 11px;
  color: #ff0000;
  padding: 15px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  const [isEdit, setIsEdit] = useState(false);

  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // todoList 를 업데이트 합니다.
    // [ {id:0, title:"", conten:""}]
    setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
    setTodo(initTodo);
  };

  // 목록에서 할일 목록 수정하기 이벤트
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 TodoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
    setIsEdit(true);
  };

  // 목록에서 할일 목록 삭제하기 이벤트
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾아서 제거하고, 목록을 업데이트
    const tempList = todoList.filter(item => item.id !== id);

    setTodoList(tempList);
  };

  // 수정 이벤트 처리
  const handleEditChange = e => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const tempArr = todoList.map(item => {
      if (item.id === editTodo.id) {
        // 현재 수정되고 있던 할일 처리
        return { ...editTodo };
      } else {
        // 나머지 할일들
        return item;
      }
    });
    setTodoList(tempArr);
    setIsEdit(false);
  };
  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              value={todo.content}
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">등록</Button>
          </InputButton>
        </Form>
      </Section>
      {isEdit && (
        <>
          <SubTitle>상세보기</SubTitle>
          <Section>
            <Form onSubmit={handleEditSubmit}>
              <InputWrap>
                <Label>선택한 제목</Label>
                <Input
                  name="title"
                  value={editTodo.title}
                  onChange={handleEditChange}
                  type="text"
                />
              </InputWrap>
              <InputWrap>
                <Label>선택한 내용</Label>
                <TextArea
                  name="content"
                  value={editTodo.content}
                  onChange={handleEditChange}
                />
              </InputWrap>
              <InputButton>
                <Button type="submit">내용 수정</Button>
              </InputButton>
            </Form>
          </Section>
        </>
      )}

      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.length === 0 ? (
          <TodoListMessage>등록된 할 일이 없습니다.</TodoListMessage>
        ) : (
          todoList.map(item => (
            <TodoItem key={item.id}>
              <TodoContent>
                {item.id}번째 할일 제목 : {item.title}
              </TodoContent>
              <TodoButtonWrap>
                <Button onClick={() => handleTodoListSelect(item.id)}>
                  수정
                </Button>
                <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
              </TodoButtonWrap>
            </TodoItem>
          ))
        )}
      </Section>
    </Container>
  );
}

export default Todo;
```

## 5. 기능 버그 개선

### 5.1. id 는 고유해야 한다.

- 삭제 이후 추가하면 id 중복 발생
- uuid 라이브러리 또는 일정하게 증가하는 리액트 변수 활용

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const TodoListMessage = styled.p`
  text-align: center;
  font-size: 11px;
  color: #ff0000;
  padding: 15px;
`;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 절대로 겹치지 않는 세상 유일한 값을 만들려면?
  // 2.1.랜덤한 값을 만들어서 id 에 담는다.
  // - uuid npm 활용
  // 2.2.계속 증가하는 값을 만들어서 id에 담는다.
  const [uid, setUid] = useState(0);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  const [isEdit, setIsEdit] = useState(false);

  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // todoList 를 업데이트 합니다.
    // [ {id:0, title:"", conten:""}]
    setTodoList([...todoList, { ...todo, id: uid + 1 }]);
    setTodo(initTodo);
    setUid(uid + 1);
  };

  // 목록에서 할일 목록 수정하기 이벤트
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 TodoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
    setIsEdit(true);
  };

  // 목록에서 할일 목록 삭제하기 이벤트
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾아서 제거하고, 목록을 업데이트
    const tempList = todoList.filter(item => item.id !== id);

    setTodoList(tempList);
  };

  // 수정 이벤트 처리
  const handleEditChange = e => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const tempArr = todoList.map(item => {
      if (item.id === editTodo.id) {
        // 현재 수정되고 있던 할일 처리
        return { ...editTodo };
      } else {
        // 나머지 할일들
        return item;
      }
    });
    setTodoList(tempArr);
    setIsEdit(false);
  };
  // jsx 자리
  return (
    <Container>
      <Title>Todo 등록</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              value={todo.content}
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputButton>
            <Button type="submit">등록</Button>
          </InputButton>
        </Form>
      </Section>
      {isEdit && (
        <>
          <SubTitle>상세보기</SubTitle>
          <Section>
            <Form onSubmit={handleEditSubmit}>
              <InputWrap>
                <Label>선택한 제목</Label>
                <Input
                  name="title"
                  value={editTodo.title}
                  onChange={handleEditChange}
                  type="text"
                />
              </InputWrap>
              <InputWrap>
                <Label>선택한 내용</Label>
                <TextArea
                  name="content"
                  value={editTodo.content}
                  onChange={handleEditChange}
                />
              </InputWrap>
              <InputButton>
                <Button type="submit">내용 수정</Button>
              </InputButton>
            </Form>
          </Section>
        </>
      )}

      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.length === 0 ? (
          <TodoListMessage>등록된 할 일이 없습니다.</TodoListMessage>
        ) : (
          todoList.map(item => (
            <TodoItem key={item.id}>
              <TodoContent>
                {item.id}번째 할일 제목 : {item.title}
              </TodoContent>
              <TodoButtonWrap>
                <Button onClick={() => handleTodoListSelect(item.id)}>
                  수정
                </Button>
                <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
              </TodoButtonWrap>
            </TodoItem>
          ))
        )}
      </Section>
    </Container>
  );
}

export default Todo;
```

## 6. 데이터 보관하기

- 웹브라우저에 보관(임시 보관)
- 데이터베이스 컴퓨터에 보관(MySQL ,PostgreSQL, NonSQL..)

### 6.1. 웹브라우저에 보관하기

- cookie : 짧은 문자열로서 일정시간 동안 유지 후 파기
- Session storage : 웹 브라우저에서 활용하는 동안 유지(웹 브라우저 종료시 파기)
- Local storage : 웹 브라우저에 짧은 문자열 보관(가장 흔하다.)

### 6.2. Local storage

- 시나리오 1. : 웹 서비스가 시작하면 `할일 내용` 가져옮
- 시나리오 2. : 사용자가 할일 수정, 할일 삭제, 할일 추가 시 업데이트
- useEffect 의 생로병사를 활용
