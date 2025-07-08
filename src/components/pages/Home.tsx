import { Link } from "react-router";

function Home() {
    return (
        <>
            <h1>
                Hi there! This is a simple test site and login form with
                Vite+React.
            </h1>
            <p>
                Check this out!
                <br />
                <br />
                <Link to="/login">Login</Link>
            </p>
        </>
    );
}

export default Home;
