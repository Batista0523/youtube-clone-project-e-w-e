import React from 'react';
import './Nav.css';
import '@fontsource/roboto/400.css';

const NavBar = () => {
    return (
        <div className="navbar">
           <div className="nav-icons">
              <i className="material-icons">menu</i>
              <i className="material-icons">video_call</i>
              <i className="material-icons">apps</i>
              <i className="material-icons">notifications</i>
              <img className="avatar" src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" height="30" alt="User Avatar" />
           </div>
        </div>
    );
}

export default NavBar;
