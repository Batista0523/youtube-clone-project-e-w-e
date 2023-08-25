import React from 'react';
import './Nav.css'

const NavBar = ({video}) => {
    return (
        <div>
            <h1>{video}</h1>
            <input type="text" />
         <button className='searchbtn'>search</button>
        </div>
    );
}

export default NavBar;
