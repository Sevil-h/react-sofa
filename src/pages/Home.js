import React from "react";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Galery from "../components/Galery/Galery";

const Home = () => {
	return (
		<>
			<Banner />
			<div className="container">
				<h2 className="title">
					Features <span>Products</span>
				</h2>
				<p className="text">
					The Stylish interior makes us want to spend more time in it. We
					present interesting sets to create an apartment. We choose the right
					colors according to our taste.
				</p>
				<Products />
				<h2 className="title">
					Visit Our <span>Galery</span>
				</h2>
				<Galery />
				<h2 className="title">
					Most Popular <span>Products</span>
				</h2>
				<p className="text">
					The Stylish interior makes us want to spend time in it.
				</p>
				<Products />
			</div>
		</>
	);
};

export default Home;
