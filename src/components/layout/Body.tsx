import { PropsWithChildren } from "react";

const Body: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className="body" id="main">
			<div className="container">{children}</div>
		</main>
	);
};

export default Body;
