import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import advertisement from "../../img/example2.jpg";
const Feed = () => {
	const { store, actions } = useContext(Context);
	const [content, setContent] = useState("");
	const sortedPosts = store.posts.reverse();
	const createNewPost = e => {
		e.preventDefault();
		if (content === "") {
			return alert("The post cant be empty");
		}
		const data = {
			content: content,
			user_id: sessionStorage.getItem("id_user")
		};
		fetch(process.env.BACKEND_URL + "/api/new-post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				alert("POSTED");
				sessionStorage.setItem("username", data.user);
				window.location.reload();
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};
	return (
		<div className="container-fluid ml-5">
			<h1 className="big-title">
				<strong>Connect4Devs</strong>
			</h1>
			<div className="row">
				<div className="sidebar col-3">
					<div className="top">
						<div className="home-div">
							<Link to="/feed">
								<button type="button" className="btn btn-outline-dark btn-profile">
									<i className="fas fa-home"></i>
								</button>
							</Link>
						</div>
						<div className="profile-div">
							<Link to="/perfil">
								<button type="button" className="btn btn-outline-dark btn-profile">
									<i className="fas fa-user"></i>
								</button>
							</Link>
						</div>
					</div>
					<div className="bottom">
						<div className="user-list">
							<ul>
								{store.users.map((item, i) => {
									return (
										<div className="user" key={item.id}>
											<h5>@{item.username}</h5>
										</div>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div className="post col-8">
					<div className="form-container">
						<form
							onSubmit={e => {
								createNewPost(e);
							}}>
							<input
								type="text"
								name="content"
								placeholder="What's on your mind?"
								onChange={e => {
									setContent(e.target.value);
								}}
							/>
							<button className="btn btn-info btn-block">Post</button>
						</form>
					</div>
					<hr className="my-4" />
					<div className="posts-list">
						<ul>
							{sortedPosts.map((item, i) => {
								return (
									<div className="unique-post" key={item.id}>
										<h5>{item.content}</h5>
										{store.users.map((element, i) => {
											return (
												<p key={i}>
													{element.id === item.user_id ? "@" + element.username : null}
												</p>
											);
										})}
										<hr className="my-4" />
									</div>
								);
							})}
						</ul>
					</div>
				</div>

				<hr />
				{/* <div className="advertisement col-3">
					<div className="advertisement-top">
						<h1>Hi</h1>
					</div>
					<div className="advertisement-bottom">
						<h1>How are you?</h1>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Feed;
