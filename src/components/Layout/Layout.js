import React, { Fragment } from "react";
import Navigation from "./Nav/Navigation";

const Layout = (props) => {
	return (
		<Fragment>
			<Navigation />
			<main className="container">{props.children}</main>
		</Fragment>
	);
};

export default Layout;
