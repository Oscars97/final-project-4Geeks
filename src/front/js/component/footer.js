import React, { Component } from "react";
import "../../styles/footer.scss";
import micittImageUrl from "../../img/micitt.jpg";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Collaborators:
			<a href="https://github.com/Oscars97"> Oscar, </a>
			<a href="https://github.com/Angiegeek">Angie, </a>
			<a href="https://github.com/AdriBejarano">Adri, </a>
			<a href="https://github.com/IsmaelArtavia">Ismael </a>
		</p>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
		<p>Sponsored by</p>
		<img id="image" src={micittImageUrl} />
	</footer>
);
