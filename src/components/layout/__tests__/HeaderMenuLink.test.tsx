import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import HeaderMenuLink from "../HeaderMenuItem";

describe("HeaderMenuLink", () => {
	it("renders the link with the correct label and url", () => {
		const handleClick = vi.fn();
		render(
			<MemoryRouter>
				<HeaderMenuLink
					label="Home"
					url="/home"
					onClick={handleClick}
				/>
			</MemoryRouter>
		);
		const link = screen.getByRole("link", { name: "Home" });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/home");
		fireEvent.click(link);
		expect(handleClick).toHaveBeenCalled();
	});
});
