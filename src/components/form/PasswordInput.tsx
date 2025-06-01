import { useCallback, useState } from "react";

interface IPasswordInputProps {
    id: string;
    label: string;
    error: string;
    autoComplete?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordInput({
    id,
    label,
    error,
    autoComplete,
    onChange,
}: IPasswordInputProps) {
    const [isPassowrdVisible, setIsPasswordVisible] = useState(false);

    const onTogglePasswordClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setIsPasswordVisible((prevState) => !prevState);
        },
        [],
    );

    return (
        <div className="form__row password-field">
            <label htmlFor={id} className="form__label">
                {label}
            </label>

            <span className="error" id="error_password">
                {error}
            </span>

            <div className="password-field__input">
                <button
                    className="password-field__toggle-button"
                    type="button"
                    onClick={onTogglePasswordClick}
                    aria-label={
                        isPassowrdVisible ? "Password shown" : "Password hidden"
                    }
                >
                    <span aria-hidden="true">
                        {isPassowrdVisible ? "Hide" : "Show"}
                    </span>
                </button>
                <input
                    className="field"
                    type={isPassowrdVisible ? "text" : "password"}
                    id={id}
                    name={id}
                    autoComplete={autoComplete}
                    aria-invalid={error ? "true" : "false"}
                    aria-describedby="error_password"
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default PasswordInput;
