import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhleSBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.EOEPtPBWAcTE0PvnE6FrKfQmoe3VdCqBXOOObpIMTcs";

function Login() {
	const user = localStorage.getItem("token");
	const navigate = useNavigate();

	if (user) {
		navigate("/user");
	}

	const [error, setError] = useState({
		summary: "",
		username: "",
		password: "",
	});
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
		let isValid = true;
		if (formData.get("username") === "") {
			setError((prevState) => ({
				...prevState,
				username: "Username is required",
				summary: "One or more fields are invalid",
			}));
			isValid = false;
		}

		if (formData.get("password") === "") {
			setError((prevState) => ({
				...prevState,
				password: "Password is required",
				summary: "One or more fields are invalid",
			}));
			isValid = false;
		}

		if (isValid) {
			setIsLoading(true);
			fetch("/")
				.then(() => {
					return true;
				})
				.then(() => {
					if (formData.get("username") === "fail") {
						console.log("Login failed");
						setIsLoading(false);
						setError((prevState) => ({
							...prevState,
							summary: "Login failed - invalid credentials",
						}));
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
					setError((prevState) => ({
						...prevState,
						summary: "Login failed - server error",
					}));
				});
		}
	}, []);

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		console.log("target", target);
		setError((prevState) => ({
			...prevState,
			[target.id]: "",
		}));
	}, []);

	useEffect(() => {
		if (!error.password && !error.username) {
			setError((prevState) => ({
				...prevState,
				summary: "",
			}));
		}
	}, [error.password, error.username]);

	return (
		<>
			<h1>Log in</h1>
			<form className="form" action="" onSubmit={onSubmit}>
				<div className="form__row">
					<label htmlFor="username" className="form__label">
						Username
					</label>
					<span className="error" id="error_username">
						{error.username}
					</span>

					<input
						className="field"
						type="text"
						id="username"
						name="username"
						autoComplete="username"
						autoFocus
						aria-invalid={error.username ? "true" : "false"}
						aria-describedby="error_username"
						onChange={onChange}
					/>
				</div>
				<div className="form__row password-field">
					<label htmlFor="password" className="form__label">
						Password
					</label>

					<span className="error" id="error_password">
						{error.password}
					</span>

					<div className="password-field__input">
						<button
							className="password-field__toggle-button"
							type="button"
							onClick={onTogglePasswordClick}
							aria-label={
								isPassowrdVisible
									? "Password shown"
									: "Password hidden"
							}
						>
							<span aria-hidden="true">
								{isPassowrdVisible ? "Hide" : "Show"}
							</span>
						</button>
						<input
							className="field"
							type={isPassowrdVisible ? "text" : "password"}
							id="password"
							name="password"
							autoComplete="current-password"
							aria-invalid={error.password ? "true" : "false"}
							aria-describedby="error_password password-text"
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="form__row">
					<p className="form__error" aria-live="assertive">
						{error.summary}
					</p>
					<input
						aria-busy={isLoading}
						className="submit-button"
						type="submit"
						value={isLoading ? "Processing" : "Login"}
					/>
				</div>
			</form>
		</>
	);
}

export default Login;
