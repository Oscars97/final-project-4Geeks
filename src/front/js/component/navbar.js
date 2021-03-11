import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing.scss";
export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<h1 />
			</Link>
			<div className="ml-auto" />
		</nav>
	);
};
