import { render, screen } from "@testing-library/react";
import User from "../User";
import { BrowserRouter } from "react-router";

describe("User page", () => {
	it("renders the home heading", () => {
		localStorage.setItem(
			"token",
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhleSBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.EOEPtPBWAcTE0PvnE6FrKfQmoe3VdCqBXOOObpIMTcs"
		);

		render(
			<BrowserRouter>
				<User />
			</BrowserRouter>
		);
		expect(
			screen.getByRole("heading", {
				name: "Welcome Hey User",
			})
		).toBeInTheDocument();
	});
});
