import React from "react";
import classes from "./Product.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = (props) => {
	return (
		<div className={classes.card}>
			<img src={props.image} alt="sofa" className={classes.image} />
			<p className={classes.name}>{props.name}</p>
			<p className={classes.price}>${props.price}</p>
			<div className={classes.stars}>
				<AiFillStar className={classes.star} />
				<AiFillStar className={classes.star} />
				<AiFillStar className={classes.star} />
				<AiFillStar className={classes.star} />
				<AiOutlineStar className={classes.star} />
			</div>
		</div>
	);
};

export default Product;
