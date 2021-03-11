import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Profile from "../component/profile_form.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1>Connect4Devs</h1>
			<Link to="/login">
				<button>Login</button>
			</Link>

			<Link to="/register">
				<button>Register</button>
			</Link>
		</div>
	);
};
