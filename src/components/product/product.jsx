import React from "react";

import "./product.scss";

// images
import productImg1 from "../../images/product-1.jpeg";
import productImg2 from "../../images/product-2.jpeg";
import productImg3 from "../../images/product-3.jpeg";

const Product = () => {
	return (
		<section className="products">
			<div className="section-center clearfix">
				<article className="products-info">
					<div className="section-title">
						<h3>checkout</h3>
						<h2>our products</h2>
					</div>
					<p className="product-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum hic dolores nesciunt blanditiis dolorum ratione quam unde cum officia. Iste ex porro id esse adipisci?</p>
					<a href="product.html" className="btn">inventory</a>
				</article>
				<article className="products-inventory">
					<div className="product">
						<img src={productImg1} alt="" className="product-img" />
						<h4 className="product-title">ginger peach tea</h4>
						<h4 className="product-price">$6.99</h4>
					</div>
					<div className="product">
						<img src={productImg2} alt="" className="product-img" />
						<h4 className="product-title">fruit sangria</h4>
						<h4 className="product-price">$6.99</h4>
					</div>
					<div className="product">
						<img src={productImg3} alt="" className="product-img" />
						<h4 className="product-title">white tea</h4>
						<h4 className="product-price">$6.99</h4>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Product;