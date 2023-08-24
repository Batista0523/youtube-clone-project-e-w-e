
import { useState, useEffect } from 'react'

import.meta.env
const API_KEY = import.meta.env.VITE_BASE_API_URL;
const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
import './App.css'


import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";




import "./App.css";


function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app_page">
        <SideBar />
        <RecommendVideo />
      </div>
    </div>
  );




function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const params = new URLSearchParams({
      key: API_KEY,
      part: 'snippet',
      q: 'coding', 
      type: 'video',
    });

    fetch(`${BASE_URL}/search?${params}`)
    .then(response => response.json())
  .then(data => {
    console.log(data.items)
    setVideos(data.items)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })
}, []);

  return (

    

    <div>
    <NavBar etag={videos.etag}/>
    <SideBar/>
    <RecommendVideo/>
    
    </div>


  )

}

export default App;
