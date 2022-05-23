import React from "react";
import classes from "./Banner.module.css";

const Banner = () => {
	return (
		<section className={classes.banner}>
			<img
				src="assets/sofa/image18.jpeg"
				alt="sofa"
				className={classes.fotoLarge}
			/>
			<img
				src="assets/sofa/image19.jpeg"
				alt="sofa"
				className={classes.fotoMiddle}
			/>
			<div className={classes.left}>
				<div className={classes.top}>
					<h1 className={classes.title}>ENTRE</h1>
					<p className={classes.text}>
						The Stlish interior makes us want to spend more time in it. We
						present interesting sets to create an apartment. We choose the right
						colors according to our taste.
					</p>
					<button className={classes.button}>Discover</button>
				</div>
				<div className={classes.whiteBottom}></div>
			</div>
			<div className={classes.right}>
				<div className={classes.whiteTop}></div>
				<div className={classes.bottom}></div>
			</div>
		</section>
	);
};

export default Banner;
