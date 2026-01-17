import { Link } from "react-router";

function NotFound() {
	return (
		<>
			<h1>Happy to see you, but this is 404 page</h1>
			<p>
				Check <Link to="/">the home page</Link>
			</p>
		</>
	);
}

export default NotFound;
