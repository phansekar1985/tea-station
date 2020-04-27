import React from "react";

// styles
import "./banner.scss";

const Banner = () => {
	return (
		<div className="banner">
			<h2>Over one hundred flavours of</h2>
			<h1>specially <br /> crafted tea.</h1>
			<a href="skill.html" className="btn btn-outline btn-large">Explore</a>
		</div>
	);
}

export default Banner;