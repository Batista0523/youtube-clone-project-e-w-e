
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";
import React from "react";




import "./App.css";


function App() {
  return (
    <div className="app">
      <NavBar />
      <SideBar />
      <RecommendVideo />
    </div>
  );



function App() {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${URL}`
  ).then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })

  return (


    <>
    <NavBar/>
    <SideBar/>
    <RecommendVideo/>
    
    </>


  )

}

export default App;
