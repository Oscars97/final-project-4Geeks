import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";

const Feed = () => {
	const createNewPost = () => {};
	return (
		<div className="container">
			<div className="row">
				<div className="sidebar col-3">
					<Link to="/perfil">
						<button type="button" className="btn btn-outline-dark btn-profile">
							Profile
						</button>
					</Link>

					<h1>aqui va el sidebar</h1>
				</div>
				<div className="post col-5">
					<div className="form-container">
						<form
							onSubmit={e => {
								e.preventDefault();
								console.log("Holi");
							}}>
							<input type="text" name="content" placeholder="What's on your mind?" />
							<button className="btn btn-info btn-block">Post</button>
						</form>
					</div>
					<hr className="my-4" />
				</div>

				<hr />
				<div className="advertisement col-3">
					<h1>aqui va la publicidad</h1>
				</div>
			</div>
		</div>
	);
};

export default Feed;
