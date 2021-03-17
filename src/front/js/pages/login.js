import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/R.png";
import "../../styles/login.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [profile, setProfile] = useState(false);
	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password);
		const data = { email: email, password: password };
		fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				if (data.status === 401) {
					data.profile_status === null ? setRedirect(false) : setProfile(false);
				} else {
					sessionStorage.setItem("token", data.token);
					sessionStorage.setItem("id_user", data.userId);
					data.profile_status === null ? setRedirect(true) : setProfile(true);
				}
				// actions.checkLogged();
			})
			.catch(error => {
				console.error("Error:", error);
				data.profile_status === null ? setRedirect(false) : setProfile(false);
			});
	};

	return (
		<div>
			<div className="form container text-center">
				<div className="tittle">
					<img src={logo} />
					<h1>Welcome!</h1>
				</div>
				<form onSubmit={e => handleSubmit(e)}>
					<div className="form-group text-center">
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Add your e-mail here."
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group text-center">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Add your password here."
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="button_submit text-center btn-light">
						LOGIN
					</button>
				</form>
			</div>
			{redirect ? <Redirect to="/profile_form" /> : null}
			{profile ? <Redirect to="/perfil" /> : null}
		</div>
	);
};

export default Login;
