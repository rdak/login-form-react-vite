import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhleSBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.EOEPtPBWAcTE0PvnE6FrKfQmoe3VdCqBXOOObpIMTcs";

function Login() {
	const user = localStorage.getItem("token");
	const navigate = useNavigate();

	if (user) {
		navigate("/user");
	}

	const [isLoading, setIsLoading] = useState(false);
	const [isPassowrdVisible, setIsPasswordVisible] = useState(false);

	const onTogglePasswordClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			setIsPasswordVisible((prevState) => !prevState);
		},
		[]
	);

	const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		setIsLoading(true);
		fetch("/")
			.then(() => {
				return true;
			})
			.then(() => {
				if (formData.get("username") === "fail") {
					console.log("Login failed");
					setIsLoading(false);
				} else {
					console.log("Login successful");
					setTimeout(() => {
						localStorage.setItem("token", "Bearer " + TOKEN);
						navigate("/user");
					}, 500);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<h1>Log in</h1>
			<form className="form" action="" onSubmit={onSubmit}>
				<div className="form__row">
					<p className="error" id="error_username"></p>
					<label htmlFor="username" className="form__label">
						Email
					</label>
					<input
						className="field"
						type="text"
						id="username"
						name="username"
						autoComplete="username"
						autoFocus
						aria-invalid="false"
						aria-describedby="error_username"
					/>
				</div>
				<div className="form__row password-field">
					<p className="error" id="error_password"></p>

					<p
						aria-live="polite"
						id="password-text"
						className="sr-only"
					>
						{isPassowrdVisible
							? "Password shown"
							: "Password hidden"}
					</p>
					<label htmlFor="password" className="form__label">
						Password
					</label>
					<div className="password-field__input">
						<button
							className="password-field__toggle-button"
							type="button"
							role="switch"
							aria-pressed="false"
							onClick={onTogglePasswordClick}
						>
							{isPassowrdVisible ? "Hide" : "Show"}
						</button>
						<input
							className="field"
							type={isPassowrdVisible ? "text" : "password"}
							id="password"
							name="password"
							autoComplete="current-password"
							aria-pressed={isPassowrdVisible}
							aria-invalid="false"
							aria-describedby="error_password"
						/>
					</div>
				</div>
				<label className="form__row">
					<input
						aria-busy={isLoading}
						className="submit-button"
						type="submit"
						value={isLoading ? "Processing" : "Login"}
					/>
				</label>
			</form>
		</>
	);
}

export default Login;
