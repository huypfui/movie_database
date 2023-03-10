// CSS import
import "./Navigation.scss"

import React from "react";
import { Link } from "react-router-dom";



import homeButton from "../../img/home_grey.svg"
import bookmark from "../../img/bookmark.svg"
import mailbox from "../../img/mailbox.svg"
import profile from "../../img/profile.svg"

const Navigation = () => {
    return (
    <div className="navBar">
        <Link to="/Home">
            <img src={homeButton} alt="Home Button"/>
        </Link>
        <img src={bookmark} alt="Bookmark"/>
        <img src={mailbox} alt="Mailbox"/>
        <img src={profile} alt="Profile"/>
    </div>
    );
}

export default Navigation;