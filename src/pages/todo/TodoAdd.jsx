// import React from "react";
// import {
//   Button,
//   Container,
//   Form,
//   Input,
//   InputButton,
//   InputWrap,
//   Label,
//   Section,
//   SubTitle,
//   TextArea,
//   Title,
//   TodoButtonWrap,
//   TodoContent,
//   TodoItem,
//   TodoListMessage,
// } from "./Todo.style";
// import { Link, useNavigate } from "react-router-dom";

// function TodoAdd({ todo, handleAddChange, handleAddSubmit }) {
//   // js
//   const navigate = useNavigate();
//   const handleSubmit = e => {
//     e.preventDefault(); // 새로고침방지
//     handleAddSubmit();
//     navigate("/");
//   };

//   // jsx
//   return (
//     <Container>
//       <TodoButtonWrap style={{ justifyContent: "flex-start" }}>
//         <Button>
//           <Link to={"/"} style={{ color: "#fff" }}>
//             이전
//           </Link>
//         </Button>
//       </TodoButtonWrap>
//       <Title>새로운 할일 등록</Title>
//       <Section>
//         <Form onSubmit={handleSubmit}>
//           <InputWrap>
//             <Label>제목</Label>
//             <Input
//               value={todo.title}
//               type="text"
//               name="title"
//               placeholder="제목을 입력하세요."
//               onChange={handleAddChange}
//             />
//           </InputWrap>
//           <InputWrap>
//             <Label>내용</Label>
//             <TextArea
//               value={todo.content}
//               name="content"
//               rows={4}
//               onChange={handleAddChange}
//             />
//           </InputWrap>
//           <TodoButtonWrap>
//             <Button type="submit">등록</Button>
//             <Button type="button">
//               <Link to={"/"} style={{ color: "#fff" }}>
//                 취소
//               </Link>
//             </Button>
//           </TodoButtonWrap>
//         </Form>
//       </Section>
//     </Container>
//   );
// }

// export default TodoAdd;
import React from "react";
import {
  Button,
  ButtonDiv,
  Container,
  Form,
  Input,
  InputWrap,
  Label,
  Section,
  TextArea,
  Title,
  TodoButtonWrap,
} from "./Todo.style";
import { Link, useNavigate } from "react-router-dom";

function TodoAdd({ todo, handleAddChange, handleAddSubmit }) {
  // js 자리
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    handleAddSubmit();
    navigate("/");
  };
  // jsx 자리
  return (
    <Container>
      <TodoButtonWrap style={{ justifyContent: "flex-start" }}>
        <Button>
          <Link to={"/"} style={{ color: "#fff" }}>
            이전
          </Link>
        </Button>
      </TodoButtonWrap>
      <Title>새로운 할일 등록</Title>
      <Section>
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              value={todo.title}
              type="text"
              name="title"
              placeholder="제목을 입력하세요."
              onChange={handleAddChange}
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              value={todo.content}
              name="content"
              rows={4}
              onChange={handleAddChange}
            />
          </InputWrap>
          <TodoButtonWrap>
            <TodoButtonWrap>
              <Button type="submit">등록</Button>
              <Button type="button">
                <Link to={"/"} style={{ color: "#fff" }}>
                  취소
                </Link>
              </Button>
            </TodoButtonWrap>
          </TodoButtonWrap>
        </Form>
      </Section>
    </Container>
  );
}

export default TodoAdd;
