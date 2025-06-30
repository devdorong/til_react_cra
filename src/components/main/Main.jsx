import React from "react";
//css
import "../css/Main.css";

// components
import Banner from "./Banner";
import BannerUnder from "./BannerUnder";
import Cock from "./Cock";
import Recently from "./Recently";
import Now from "./Now";
import AppComponents from "./AppComponents";

function Main() {
  return (
    <>
      <Banner></Banner>
      <BannerUnder></BannerUnder>
      <Cock></Cock>
      <Recently></Recently>
      <Now></Now>
      <AppComponents></AppComponents>
    </>
  );
}

export default Main;
