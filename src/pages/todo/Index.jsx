import 이름 from "../../assets/logo192.png";

import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingDiv from "../../components/ui/LoadingDiv";

// 제거해야 할 기능
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// import Todo from "./Todo";
// import TodoAdd from "./TodoAdd";
// import TodoDetail from "./TodoDetail";
// import TodoEdit from "./TodoEdit";
// import Layout from "../company/Layout";
// import CompanyDetail from "../company/CompanyDetail";
// import CompanyList from "../company/CompanyList";
// import CompanyLocation from "../company/CompanyLocation";
// const TodoPage = lazy(() => import("./Todo"));
const TodoPage = lazy(() => sleep(1000).then(() => import("./Todo")));
const TodoAdd = lazy(() => import("./TodoAdd"));
const TodoDetail = lazy(() => import("./TodoDetail"));
const TodoEdit = lazy(() => import("./TodoEdit"));
const Layout = lazy(() => import("../company/Layout"));
const CompanyDetail = lazy(() => import("../company/CompanyDetail"));
const CompanyList = lazy(() => import("../company/CompanyList"));
const CompanyLocation = lazy(() => import("../company/CompanyLocation"));

function Index() {
  // js 자리

  // 전체 목록
  const [todoList, setTodoList] = useState([]);
  // 현재 작성중인 목록
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // uid를 이용해서 구분한다. (예. uuid 라이브러리)
  const [uid, setUid] = useState(0);
  // 새로운 할일 등록 함수 생성
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = () => {
    if (!todo.title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!todo.content) {
      alert("내용을 입력하세요.");
      return;
    }
    // 전체 목록 갱신 해주기
    setTodoList([...todoList, { ...todo, id: uid }]);
    setUid(uid + 1);
    setTodo(initTodo);
  };

  const handleDelete = deleteId => {
    const tempArr = todoList.filter(item => item.id !== deleteId);
    setTodoList(tempArr);
  };

  // 수정 Submit 처리하기
  const handleEditSubmit = edititem => {
    console.log(edititem);
    const tempArr = todoList.map(item => {
      if (item.id === edititem.id) {
        return { ...edititem };
      } else {
        return item;
      }
    });
    setTodoList(tempArr);
  };

  useEffect(() => {
    const result = localStorage.getItem("mind-todo");
    if (!result) {
      localStorage.setItem("mind-todo", JSON.stringify([]));
    } else {
      try {
        const json = JSON.parse(result);
        const check = Array.isArray(json);
        if (check) {
          setTodoList(json);
          setUid(json.length);
        } else {
          setTodoList([]);
          setUid(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mind-todo", JSON.stringify(todoList));
  }, [todoList]);

  // jsx 자리
  return (
    <div className="wrap">
      <img src="/logo192.png" alt="로고" />
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="로고" />
      <h2>/src/assets 폴더 이미지 활용</h2>
      <img src={이름} alt="로고" />
      <Router>
        <Routes>
          <Route
            path="/"
            // element={<Todo todoList={todoList} handleDelete={handleDelete} />}
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoPage todoList={todoList} handleDelete={handleDelete} />
              </Suspense>
            }
          />
          <Route
            path="/add"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoAdd
                  todo={todo}
                  handleAddChange={handleAddChange}
                  handleAddSubmit={handleAddSubmit}
                />
              </Suspense>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoDetail todoList={todoList} />
              </Suspense>
            }
          />
          <Route
            path="/edit"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoEdit
                  todoList={todoList}
                  handleEditSubmit={handleEditSubmit}
                />
              </Suspense>
            }
          />
          {/* 회사소개 */}
          <Route
            path="/company"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <Layout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<LoadingDiv />}>
                  <CompanyDetail />
                </Suspense>
              }
            />
            <Route
              path="list"
              element={
                <Suspense fallback={<LoadingDiv />}>
                  <CompanyList />
                </Suspense>
              }
            />
            <Route
              path="location"
              element={
                <Suspense fallback={<LoadingDiv />}>
                  <CompanyLocation />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Index;
