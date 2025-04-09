import { PropsWithChildren } from "react";

const Body: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="body">{children}</div>;
};

export default Body;
