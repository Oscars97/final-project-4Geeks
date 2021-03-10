import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Profile from "../component/profile_form.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.users);
	return (
		<div className="text-center mt-5">
			<h1>Connect4Devs</h1>
			<Link to="/profile_form">
				<button className="btn btn-warning ">Profile</button>
			</Link>
			<ul>
				{store.users.map((item, i) => {
					return (
						<div className="users container" key={item.id}>
							<h2>@{item.username}</h2>
							<h2>{item.email}</h2>
							<hr />
						</div>
					);
				})}
			</ul>
		</div>
	);
};
