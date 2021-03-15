import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.scss";

const Profile = () => {
	fetch(process.env.BACKEND_URL + "/api/profile", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer" + sessionStorage.getItem("token")
		}
		//body: JSON.stringify(data)
	})
		.then(response => response.json())
		.then(data => {
			console.log("Success:", data);
			sessionStorage.setItem("token", data.token);
			sessionStorage.setItem("id_user", data.userId);
			//setRedirect(true);
			// actions.checkLogged();
		})
		.catch(error => {
			console.error("Error:", error);
		});

	return (
		<div clasName="container2">
			<div className="text-center">
				<img id="imagen" className="rounded-circle" src="https://picsum.photos/200" />
			</div>
			<br></br>
			<div className="jumbotron">
				<h1 className="display-4">Hello, User Name</h1>
				<p className="lead">User Name Last Name</p>
				<hr className="my-4" />
				<p>About me, Description about user from database</p>

				<a className="btnprofile btn-primary btn-lg" href="#" role="button">
					go to Post
				</a>

				<br></br>
				<br></br>
				<br></br>

				<div>
					<ul>
						<li>
							<a href="#">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-comment" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/nicesocksbb" target="_blank" rel="noopener noreferrer">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-twitter-square" />
							</a>
						</li>
						<li>
							<a href="https://github.com/Oscars97" target="_blank" rel="noopener noreferrer">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-github" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/oscars97/" target="_blank" rel="noopener noreferrer">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-linkedin" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Profile;
