import React from "react";

import "./skills.scss";

const Skills = () => {
	return (
		<section className="skills clearfix">
			<article className="skill">
				<span className="skill-icon">
					<i className="fas fa-mug-hot" />
				</span>
				<h4 className="skill-title">made in US</h4>
				<p className="skill-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, dolores voluptas optio saepe repellendus accusantium.</p>
			</article>

			<article className="skill">
				<span className="skill-icon">
					<i className="fas fa-glass-cheers" />
				</span>
				<h4 className="skill-title">relaxation</h4>
				<p className="skill-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, dolores voluptas optio saepe repellendus accusantium.</p>
			</article>

			<article className="skill">
				<span className="skill-icon">
					<i className="fas fa-bomb" />
				</span>
				<h4 className="skill-title">energy</h4>
				<p className="skill-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, dolores voluptas optio saepe repellendus accusantium.</p>
			</article>

			<article className="skill">
				<span className="skill-icon">
					<i className="fas fa-mortar-pestle" />
				</span>
				<h4 className="skill-title">family reciepie</h4>
				<p className="skill-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, dolores voluptas optio saepe repellendus accusantium.</p>
			</article>
		</section>
	);
};

export default Skills;