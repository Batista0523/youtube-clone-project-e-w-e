import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
const NavBar = () => {
  
     
  return (
    <nav className="nav-bar">
        <img
        className="header-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20220605194644"
        height="50"
        alt="YouTube Logo"
      />
     
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
