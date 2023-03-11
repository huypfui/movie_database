// CSS import
import "./Navigation.scss";

// Component import
import React from "react";
import { Link } from "react-router-dom";

// Image import
import homeGrey from "../../img/home_grey.svg";
import homeRed from "../../img/home_red.svg";
import bookmark from "../../img/bookmark.svg";
import mailbox from "../../img/mailbox.svg";
import profile from "../../img/profile.svg";

const Navigation = ({ home }) => {
	return (
		<div className="navBar">
			{home ? (
				<Link to="/Home">
					<img src={homeRed} alt="Home Button" />
				</Link>
			) : (
				<Link to="/Home">
					<img src={homeGrey} alt="Home Button" />
				</Link>
			)}
			<img src={bookmark} alt="Bookmark" />
			<img src={mailbox} alt="Mailbox" />
			<img src={profile} alt="Profile" />
		</div>
	);
};

export default Navigation;
