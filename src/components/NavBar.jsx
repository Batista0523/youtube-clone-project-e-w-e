import React from 'react';
import './Nav.css'

const NavBar = ({snippet}) => {
    console.log(snippet)
    return (
        <div>
            <h1>{snippet}</h1>
        </div>
    );
}

export default NavBar;
