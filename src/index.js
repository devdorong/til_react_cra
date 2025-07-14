import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import StartPage from "./pages/StartPage";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Test from "./pages/Test";
import RegisterPage from "./pages/RegisterPage";
import Todo from "./pages/Todo";
import MindDiary from "./pages/MindDiary";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <Todo />
  </div>,
);
