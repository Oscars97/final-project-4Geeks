import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.scss";

const Profile = () => {
	const user_id = sessionStorage.getItem("id_user");
	console.log(user_id);
	const [info_user, setInfoUser] = useState({});
	useEffect(() => {
		fetch(process.env.BACKEND_URL + `/api/profile/${user_id}`)
			.then(response => response.json())
			.then(data => {
				setInfoUser(data.user);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	}, []);

	return (
		<div className="container-fluid">
			<div className="text-center">
				<img id="imagen" className="rounded-circle" src="https://picsum.photos/200" />

				<div className="jumbotron">
					<div className="text-center">
						<h1 className="display-4">Hello</h1>
						<p className="lead">
							{info_user.name} {info_user.last_name}
						</p>

						<hr className="my-4" />
						<p>{info_user.about_me}</p>

						{/* <a className="btnprofile btn-primary btn-lg" href="#" role="button">
							go to Post
						</a> */}

						<div className="container-fluid">
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
									<a
										href={`https://twitter.com/${info_user.twitter}`}
										target="_blank"
										rel="noopener noreferrer">
										<span />
										<span />
										<span />
										<span />
										<span className="fa fa-twitter-square" />
									</a>
								</li>
								<li>
									<a
										href={`https://github.com/${info_user.github}`}
										target="_blank"
										rel="noopener noreferrer">
										<span />
										<span />
										<span />
										<span />
										<span className="fa fa-github" />
									</a>
								</li>
								<li>
									<a
										href={`https://linkedin.com/${info_user.linkedin}`}
										target="_blank"
										rel="noopener noreferrer">
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
			</div>
		</div>
	);
};

export default Profile;
