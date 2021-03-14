import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/profile.scss";

const Profile = () => {
	return (
		<div clasName="container">
			<div className="text-center">
				<img id="imagen" className="rounded-circle" src="https://picsum.photos/200" />
			</div>
			<br></br>
			<div className="jumbotron">
				<h1 className="display-4">Hello,</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					go to Post
				</a>
				<br></br>
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
							<a href="#">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-twitter-square" />
							</a>
						</li>
						<li>
							<a href="#">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-github" />
							</a>
						</li>
						<li>
							<a href="#">
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
