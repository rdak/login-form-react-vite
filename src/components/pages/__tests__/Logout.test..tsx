import { render, screen } from "@testing-library/react";
import Logout from "../Logout";
import { BrowserRouter } from "react-router";

describe("Logout page", () => {
	it("renders the home heading", () => {
		render(
			<BrowserRouter>
				<Logout />
			</BrowserRouter>
		);
		expect(
			screen.getByRole("heading", {
				name: "You are successfully logged out",
			})
		).toBeInTheDocument();
	});
});
