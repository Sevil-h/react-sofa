import React from "react";
import classes from "./Products.module.css";
import Product from "./Product/Product";

const Products = () => {
	return (
		<div className={classes.cards}>
			<Product
				image="assets/sofa/image1.jpeg"
				price="550.00"
				name="Yellow Sofa"
			/>
			<Product
				image="assets/sofa/image23.jpeg"
				price="620.00"
				name="Twin Sofa"
			/>
			<Product
				image="assets/sofa/image4.jpeg"
				price="460.00"
				name="Leather Sofa"
			/>
		</div>
	);
};

export default Products;
