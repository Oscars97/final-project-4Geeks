import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const Login = () => {
	return (
		<form>
			<div className="form-group">
				<label>Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				<small id="emailHelp" className="form-text text-muted">
					We ll never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" />
			</div>
			<div className="form-group form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label">Check me out</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default Login;
