interface ITextInputProps {
    id: string;
    label: string;
    error: string;
    autoComplete?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
    id,
    label,
    error,
    autoComplete,
    onChange,
}: ITextInputProps) {
    return (
        <div className="form__row">
            <label htmlFor={id} className="form__label">
                {label}
            </label>
            <span className="error" id="error_username">
                {error}
            </span>

            <input
                className="field"
                type="text"
                id={id}
                name={id}
                autoComplete={autoComplete}
                autoFocus
                aria-invalid={error ? "true" : "false"}
                aria-describedby="error_username"
                onChange={onChange}
            />
        </div>
    );
}

export default TextInput;
