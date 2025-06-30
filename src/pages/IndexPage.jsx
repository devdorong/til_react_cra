import React from "react";

// css
import "../css/Popup.css";

//js
import "../js/Popup.js";

// components
import Header from "../components/header/Header.jsx";
import Main from "../components/Main";
import Footer from "../components/footer/Footer.jsx";
import Popup from "../components/popup/Popup.jsx";

function IndexPage() {
  return (
    <>
      {/* <div className="box">로고</div> */}
      <Popup></Popup>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default IndexPage;
