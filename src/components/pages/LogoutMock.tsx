import { useEffect } from "react";
import { useNavigate } from "react-router";

function LogoutMock() {
	const navigate = useNavigate();
	/**
	 * do any required stuff to logout the user on the backend
	 * no need - i just didn't want to add a small context to handle localStorage
	 */
	useEffect(() => {
		fetch("/")
			.then(() => {
				localStorage.removeItem("token");
				setTimeout(() => {
					navigate("/logout");
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, [navigate]);

	return <p>processing logout...</p>;
}

export default LogoutMock;
