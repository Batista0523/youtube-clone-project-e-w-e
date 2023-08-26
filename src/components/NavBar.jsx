import React from "react";
import "./Nav.css";

const NavBar = () => {
  return (
    <div>

           <i className="material-icons">menu</i>
           <img classname="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20220605194644" height="50"></img>
              <input type="text" placeholder="search" />
              <i className="material-icons">search</i>
              <i className="material-icons">micro</i>
              <i className="material-icons">video_call</i>
              <i className="material-icons">apps</i>
              <i className="material-icons">notifications</i>
              <img className="avatar" src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" height="30" alt="User Avatar" />

      

    </div>
  );
};

export default NavBar;
