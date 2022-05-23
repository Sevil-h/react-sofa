import React, { Fragament } from "react";

const Layout = (props) => {
	return (
		<Fragament>
			<div className="container">{props.children}</div>
		</Fragament>
	);
};

export default Layout;
