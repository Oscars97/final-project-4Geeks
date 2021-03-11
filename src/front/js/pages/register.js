import React, { useState } from "react";
import "../../styles/register.scss";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, username, password);
	};

	return (
		<div>
			<div className="form container">
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
					<button type="submit" className="button_submit btn text-center btn-light">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
