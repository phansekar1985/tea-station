import React from "react";

// style
import "./services.scss";

// images
import imgProduct1 from "../../images/product-1.jpeg";
import imgProduct2 from "../../images/product-2.jpeg";
import imgProduct3 from "../../images/product-3.jpeg";

const Services = () => {
	return (
		<section className="services">
			<div className="section-center">
				<div className="section-title">
					<h3>explore</h3>
					<h2>our services</h2>
				</div>
				<article className="service-card">
					<div className="service-image-container">
						<img src={imgProduct1} alt="product 1" />
						<span className="service-icon">
							<i className="fas fa-mortar-pestle" />
						</span>
					</div>
					<div className="service-description">
						<h4 className="service-title">
							custom reciepes
						</h4>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ullam nostrum error suscipit provident neque beatae maiores incidunt dignissimos cupiditate, dolorum velit esse dolor ipsum!</p>
						<a href="readmore.html" className="btn btn-service">read more</a>
					</div>
				</article>

				<article className="service-card">
					<div className="service-image-container">
						<img src={imgProduct2} alt="product 2" />
						<span className="service-icon">
							<i className="fas fa-home" />
						</span>
					</div>
					<div className="service-description">
						<h4 className="service-title">
							home delivery
						</h4>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ullam nostrum error suscipit provident neque beatae maiores incidunt dignissimos cupiditate, dolorum velit esse dolor ipsum!</p>
						<a href="readmore.html" className="btn btn-service">read more</a>
					</div>
				</article>

				<article className="service-card">
					<div className="service-image-container">
						<img src={imgProduct3} alt="product 3" />
						<span className="service-icon">
							<i className="fas fa-mug-hot" />
						</span>
					</div>
					<div className="service-description">
						<h4 className="service-title">
							tea ageing
						</h4>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ullam nostrum error suscipit provident neque beatae maiores incidunt dignissimos cupiditate, dolorum velit esse dolor ipsum!</p>
						<a href="readmore.html" className="btn btn-service">read more</a>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Services;