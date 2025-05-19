import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "../TextInput";

describe("TextInput", () => {
	it("renders label and input with correct props", () => {
		render(
			<TextInput
				id="username"
				label="Username"
				error=""
				onChange={() => {}}
			/>
		);
		expect(screen.getByLabelText("Username")).toBeInTheDocument();
		expect(screen.getByRole("textbox")).toHaveAttribute("id", "username");
	});

	it("shows error message and sets aria-invalid", () => {
		render(
			<TextInput
				id="username"
				label="Username"
				error="Username required"
				onChange={() => {}}
			/>
		);
		expect(screen.getByText("Username required")).toBeInTheDocument();
		expect(screen.getByRole("textbox")).toHaveAttribute(
			"aria-invalid",
			"true"
		);
	});

	it("calls onChange when input changes", () => {
		const handleChange = vi.fn();
		render(
			<TextInput
				id="username"
				label="Username"
				error=""
				onChange={handleChange}
			/>
		);
		fireEvent.change(screen.getByRole("textbox"), {
			target: { value: "abc" },
		});
		expect(handleChange).toHaveBeenCalled();
	});
});
