

import React from "react";
import "./Nav.css";

const NavBar = () => {
  return (
    <div>
           <i className="material-icons">menu</i>
              <i className="material-icons">video_call</i>
              <i className="material-icons">apps</i>
              <i className="material-icons">notifications</i>
              <img className="avatar" src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" height="30" alt="User Avatar" />

      <input type="text" />
      <button className="searchbtn">search</button>
    </div>
  );
};


export default NavBar;
