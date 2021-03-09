import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.users);
	return (
		<div className="text-center mt-5">
			<ul>
				{store.users.map((item, i) => {
					return (
						<div key={item.id}>
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
