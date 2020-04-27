import React from "react";

// components
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import ContentDivider from "../content-divider/content-divider";
import Skills from "../skills/skills";
import About from "../about/about";
import Product from "../product/product";
import Services from "../services/services";

// style
import "./app.scss";

function App() {
	return (
		<div>
			<Navbar />
			<Header />
			<ContentDivider />
			<Skills />
			<About />
			<Product />
			<Services />
		</div>
	);
}

export default App;
