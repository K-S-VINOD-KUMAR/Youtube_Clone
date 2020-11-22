 import React, { useState } from "react";
 import './Header.css';
 import MenuIcon from "@material-ui/icons/Menu";
 import SearchIcon from "@material-ui/icons/Search";
 import VideoCallIcon from "@material-ui/icons/VideoCall";
 import AppsIcon from "@material-ui/icons/Apps";
 import NotificationsIcon from "@material-ui/icons/Notifications";
 import Avatar from "@material-ui/core/Avatar";
 import { Link } from "react-router-dom";
 
 // es7 snippets (Go download as an extension on VSC)
 function Header() {

    const [inputSearch, setInputSearch] = useState("");

     return (
         <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="logo" />
                </Link>
            </div>
            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
                
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Vinod Kumar"
                 src="https://avatars2.githubusercontent.com/u/70435848?s=400&u=2209ca4705455c1e4181109f4734bf9805ad7fd1&v=4"
                 />
            </div>
         </div>
     )
 }
 
 export default Header
 