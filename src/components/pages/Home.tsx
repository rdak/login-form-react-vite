import { Link } from "react-router";

function Home() {
	return (
		<p>
			Hi there! This is a simple test site and login form with Vite+React.
			<br />
			<br />
			Check this out!
			<br />
			<br />
			<Link to="/login">Login</Link>
		</p>
	);
}

export default Home;
