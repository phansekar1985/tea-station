import React from "react";

import backgroundImage from "../../images/about-bcg.jpeg";

// styles
import "./about.scss";

const About = () => {
	return (
		<section className="about">
			<div className="section-center clearfix">
				<article className="about-img">
					<div className="about-picture-container">
						<img src={backgroundImage} alt=""/>
					</div>
				</article>
				<article className="about-info">
					<div className="section-title">
						<h3>about our</h3>
						<h2>tea station</h2>
					</div>
					<p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorum, atque quisquam sed eveniet nobis!</p>
					<p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorum, atque quisquam sed eveniet nobis!</p>
					<a href="about.html" className="btn">learn more</a>
				</article>
			</div>
		</section>
	);
}

export default About;