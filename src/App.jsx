import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";
import React from "react";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <RecommendVideo />
    </>
  );
}

export default App;
