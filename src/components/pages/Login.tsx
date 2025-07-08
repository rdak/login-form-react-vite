import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PasswordInput from "../form/PasswordInput";
import TextInput from "../form/TextInput";

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

    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
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
                                localStorage.setItem(
                                    "token",
                                    "Bearer " + TOKEN,
                                );
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
        },
        [navigate],
    );

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.id;
        setError((prevState) => ({
            ...prevState,
            [name]: "",
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
                <TextInput
                    id="username"
                    label="Username"
                    error={error.username}
                    autoComplete="username"
                    onChange={onChange}
                />
                <PasswordInput
                    id="password"
                    label="Password"
                    autoComplete="current-password"
                    error={error.password}
                    onChange={onChange}
                />
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
