import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInput from "../PasswordInput";

describe("PasswordInput", () => {
	it("renders label and password input with correct props", () => {
		render(
			<PasswordInput
				id="password"
				label="Password"
				error=""
				onChange={() => {}}
			/>,
		);
		expect(screen.getByLabelText("Password")).toBeInTheDocument();
		expect(screen.getByLabelText("Password")).toHaveAttribute(
			"type",
			"password",
		);
		expect(
			screen.getByRole("button", { name: "Password hidden" }),
		).toBeInTheDocument();
	});

	it("shows error message and sets aria-invalid", () => {
		render(
			<PasswordInput
				id="password"
				label="Password"
				error="Password required"
				onChange={() => {}}
			/>,
		);
		expect(screen.getByText("Password required")).toBeInTheDocument();
		expect(screen.getByLabelText("Password")).toHaveAttribute(
			"aria-invalid",
			"true",
		);
	});

	it("calls onChange when input changes", () => {
		const handleChange = vi.fn();
		render(
			<PasswordInput
				id="password"
				label="Password"
				error=""
				onChange={handleChange}
			/>,
		);
		fireEvent.change(screen.getByLabelText("Password"), {
			target: { value: "secret" },
		});
		expect(handleChange).toHaveBeenCalled();
	});
});
