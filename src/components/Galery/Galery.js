import React from "react";
import classes from "./Galery.module.css";

const Galery = () => {
	return (
		<div className={classes.galery}>
			<div>
				<img src="assets/sofa/image6.jpeg" alt="galery sofa image" />
				<img src="assets/sofa/image7.jpeg" alt="galery sofa image" />
			</div>
			<div>
				<img src="assets/sofa/image8.jpeg" alt="galery sofa image" />
				<img src="assets/sofa/image11.jpeg" alt="galery sofa image" />
			</div>
			<div>
				<img src="assets/sofa/image12.jpeg" alt="galery sofa image" />
				<img src="assets/sofa/image9.jpeg" alt="galery sofa image" />
			</div>
		</div>
	);
};

export default Galery;
