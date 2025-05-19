import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router";

describe("Footer", () => {
	it("renders the footer", () => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>
		);
		// Adjust the text below to match your footer content
		expect(
			screen.getByRole("link", { name: "Logo footer" })
		).toBeInTheDocument();
	});
});
