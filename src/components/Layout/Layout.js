import React, { Fragment } from "react";

const Layout = (props) => {
	return (
		<Fragment>
			<main className="container">{props.children}</main>
		</Fragment>
	);
};

export default Layout;
