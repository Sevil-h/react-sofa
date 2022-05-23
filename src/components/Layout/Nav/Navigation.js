import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Navigation.module.css";

const Navigation = () => {
	return (
		<nav className={classes.nav}>
			<div>
				<p className={classes.logo}>Sofa</p>
				<span></span>
			</div>
			<ul>
				<li>Home</li>
				<li>About Us</li>
				<li>Services</li>
				<li>Shop</li>
				<li>
					<Button text="Contact" />
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
