import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing.scss";
import image from "../../img/img-landing.png";
import Particles from "react-tsparticles";
const Landing = () => {
	return (
		<div className="container-fluid">
			<Particles
				id="tsparticles"
				options={{
					background: {
						color: {
							value: "rgb(4, 29, 46);"
						}
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "push"
							},
							onHover: {
								enable: true,
								mode: "repulse"
							},
							resize: true
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40
							},
							push: {
								quantity: 4
							},
							repulse: {
								distance: 200,
								duration: 0.4
							}
						}
					},
					particles: {
						color: {
							value: "#ffffff"
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1
						},
						collisions: {
							enable: true
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 6,
							straight: false
						},
						number: {
							density: {
								enable: true,
								value_area: 800
							},
							value: 80
						},
						opacity: {
							value: 0.5
						},
						shape: {
							type: "circle"
						},
						size: {
							random: true,
							value: 5
						}
					},
					detectRetina: true
				}}
			/>
			<div className="row">
				<div className="col-6 first-column">
					<h5>A World wide place where developers meet!</h5>
					<h1>
						<strong>Connect4Devs</strong>
					</h1>

					<button className="btn btn-block btn-register">REGISTER</button>
					<div className="button">
						<Link to="/demo">
							<button type="button" className="btn btn-outline-light btn-block btn-login">
								LOG IN
							</button>
						</Link>
					</div>
				</div>
				<div className="col-6 second-column">
					<img src={image} />
				</div>
			</div>
		</div>
	);
};

export default Landing;
