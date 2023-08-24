import { useState } from 'react'
import Nav from '../components/Header'
import.meta.env
const URL = import.meta.env.VITE_BASE_API_URL;
import './App.css'



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
    <div>
     <Nav />
       
    </div>

  )
}

export default App
