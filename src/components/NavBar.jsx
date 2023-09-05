import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavBar = ({ setSearchQuery, initialSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchQuery);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="navbar">
      <i className="material-icons">menu</i>
      <img
        className="header-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20220605194644"
        height="50"
        alt="YouTube Logo"
      />
      <input
        id="searchInput"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <i className="material-icons" onClick={handleSearchClick}>
        search
      </i>
      <i className="material-icons">micro</i>
      <i className="material-icons">video_call</i>
      <i className="material-icons">apps</i>
      <i className="material-icons">notifications</i>
      <img
        className="avatar"
        src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
        height="30"
        alt="User Avatar"
      />
    </div>
  );
};

export default NavBar;
