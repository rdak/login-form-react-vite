import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";
import { BrowserRouter } from "react-router";

describe("NotFound page", () => {
	it("renders the home heading", () => {
		render(
			<BrowserRouter>
				<NotFound />
			</BrowserRouter>,
		);
		expect(
			screen.getByRole("heading", {
				name: "Happy to see you, but this is 404 page",
			}),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: "the home page" }),
		).toBeInTheDocument();
	});
});
