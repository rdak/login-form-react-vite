import { PropsWithChildren } from "react";

const Body: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="body" id="main">
			<div className="container">{children}</div>
		</div>
	);
};

export default Body;
