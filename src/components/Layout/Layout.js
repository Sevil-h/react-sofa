import React, { Fragment } from "react";
import Navigation from "./Nav/Navigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
	return (
		<Fragment>
			<Navigation />
			<main className={classes.container}>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
