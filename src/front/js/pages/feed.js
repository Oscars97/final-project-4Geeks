import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";

const Feed = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="sidebar col-3">
					<Link to="/perfil">
						<button type="button" className="btn btn-outline-light btn-login">
							Profile
						</button>
					</Link>
					<Link to="/home">
						<button type="button" className="btn btn-outline-light btn-login">
							home
						</button>
					</Link>
					<h1>aqui va el sidebar</h1>
				</div>
				<div className="post col-5">
					<h1>aqui va el post</h1>
				</div>
				<div className="advertisement col-3">
					<h1>aqui va la publicidad</h1>
				</div>
			</div>
		</div>
	);
};

export default Feed;
