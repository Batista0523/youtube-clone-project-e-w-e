import React from 'react';
import './Nav.css'

const NavBar = ({snippet}) => {
    return (
        <div>
            <h1>{snippet.channelId}</h1>
        </div>
    );
}

export default NavBar;
