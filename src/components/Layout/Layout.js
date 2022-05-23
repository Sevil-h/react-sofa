import React, { Fragment } from "react";
import Navigation from "./Nav/Navigation";
import classes from "./Layout.module.css";
import Footer from "./Footer/Footer";

const Layout = (props) => {
	return (
		<Fragment>
			<Navigation />
			<main className={classes.container}>{props.children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
