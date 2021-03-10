import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile_form.scss";

const profile_form = () => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [aboutMe, setAboutMe] = useState("");
	const [gitHub, setGitHub] = useState("");
	const [linkEdin, setLinkEdin] = useState("");
	const [twiter, setTwiter] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
	};
	console.log(name, lastName, gitHub);
	return (
		<div className="form container">
			<div className="note">
				<p>Connect4Devs</p>
			</div>
			<br />
			<div className="form-content container2">
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<input
								type="name"
								className="form-control"
								id="floatingName"
								placeholder="Name"
								onChange={e => setName(e.target.value)}
							/>

							<label htmlFor="floatingInput">Name</label>
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group">
							<input
								type="lastname"
								className="form-control"
								id="floatingInput"
								placeholder="Last Name"
								onChange={e => setLastName(e.target.value)}
							/>
							<label htmlFor="floatingInput">Last Name</label>
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group">
							<div className="form-group">
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
								<label htmlFor="floatingInput">About me</label>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-group input-group">
						<input   
							type="github" 
							className="form-control"
							id="floatingInput"
							placeholder="GitHub" 
							onChange={e => setGitHub(e.target.value)}
						/>

						<input
							type="linkedin"
							className="form-control"
							id="floatingInput"
							placeholder="Linkedin"
							onChange={e => setLinkEdin(e.target.value)}
						/>

						<input
							type="twiter"
							className="form-control"
							id="floatingInput"
							placeholder="Twiter"
							onChange={e => setTwiter(e.target.value)}
						/>
					</div>

					<div className="row g-2">
						<div className="col-md">
							<div className="form-floating">
								<label htmlFor="floatingInput">GitHub</label>
							</div>
						</div>
						<div className="col-md">
							<div className="form-floating">
								<label>Linkedin</label>
							</div>
						</div>
						<div className="col-md">
							<div className="form-floating">
								<label htmlFor="floatingInput">Twiter</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<button className="w-100 btnRegister btn-lg btn-primary" type="submit" value="Register">
				Submit
			</button>
		</div>
	);
};

export default profile_form;
