import React from 'react';
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
// import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
// import {Link, useHistory} from "react-router-dom";

function Header(){
    return (
        <div className="header">
            {/* <PersonIcon className = "header__icon" fontSize='large'/> */}
            <img 
                className = "header__logo"
                src = "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
                alt = "tinder logo"/>
            {/* <ForumIcon className = "header__icon" fontSize='large'/> */}
        </div>
    );
}

export default Header;
