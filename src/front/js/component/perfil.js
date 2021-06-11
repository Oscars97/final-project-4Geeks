import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.scss";

const Profile = () => {
	const user_id = sessionStorage.getItem("id_user");
	const [info_user, setInfoUser] = useState({});
	const [infoGithub, setInfoGithub] = useState({});
	const [repositories, setRepositories] = useState([]);
	let github_profile;
	useEffect(() => {
		fetch(process.env.BACKEND_URL + `/api/profile/${user_id}`)
			.then(response => response.json())
			.then(data => {
				setInfoUser(data.user);
				getGithubInfo(data.user.github);
				getRepositories(data.user.github);
			})
			.catch(error => {
				return error;
			});

		const getGithubInfo = username => {
			fetch(`https://api.github.com/users/${username}`)
				.then(response => response.json())
				.then(data => {
					setInfoGithub(data);
				})
				.catch(error => {
					return error;
				});
		};
		const getRepositories = username => {
			fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=10`)
				.then(response => response.json())
				.then(data => {
					setRepositories(data);
				})
				.catch(error => {
					return error;
				});
		};
	}, []);

	return (
		<div className="container">
			<div className="text-center">
				<div className="div-img-user">
					<img id="" className="img-user" src={infoGithub.avatar_url} />
				</div>

				<div className="jumbotron">
					<div className="text-center">
						<h1 className="display-4">Welcome,</h1>
						<h2 className="lead">
							{info_user.name} {info_user.last_name}
						</h2>

						<hr className="my-4" />
						<h3>{info_user.about_me}</h3>

						{/* <a className="btnprofile btn-primary btn-lg" href="#" role="button">
							go to Post
						</a> */}

						<div className="container-fluid">
							<ul>
								<li>
									<Link to="/feed">
										<button href="#">
											<span />
											<span />
											<span />
											<span />
											<span className="fa fa-comment" />
										</button>
									</Link>
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
										href={`https://linkedin.com/in/${info_user.linkedin}`}
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
				<div className="github-info">
					<h1>Information from Github</h1>
					<p>Username: {infoGithub.login}</p>
					<p>Name: {infoGithub.name}</p>
					<p>Bio: {infoGithub.bio}</p>
				</div>
				<div className="github-repositories">
					<h1 className="big-title">
						<strong>Repositories</strong>
					</h1>
					<ul>
						{repositories.map((item, i) => {
							return (
								<div key={i} className="repository">
									<h5>Project name: {item.name}</h5>
									<a target="_blank" rel="noopener noreferrer" href={item.html_url}>
										Click here!
									</a>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Profile;
