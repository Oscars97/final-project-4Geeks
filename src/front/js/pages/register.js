import React, { useState } from "react";
import "../../styles/register.scss";
import { Redirect, Link } from "react-router-dom";
const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const handleSubmit = e => {
		e.preventDefault();

		const data = { email: email, username: username, password: password };

		fetch(process.env.BACKEND_URL + "/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				setRedirect(true);
				// setRedirect(true);
			})
			.catch(error => {
				alert("User with that email already exits");
			});
	};

	return (
		<div>
			<div className="form container register-form">
				<form onSubmit={e => handleSubmit(e)}>
					<div className="form-group text center">
						<label>Email </label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group text center">
						<label>User Name</label>
						<input
							type="form-control"
							className="form-control"
							id="exampleInputPassword1"
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
					<div className="form-group text center">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="buttons">
						<div>
							<button type="submit" className="button_submit btn text-center btn-light">
								Sign Up
							</button>
						</div>
						<div>
							<Link to="/login">
								<button type="button" className="btn btn-outline-dark btn-profile">
									Login
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};

export default Register;
