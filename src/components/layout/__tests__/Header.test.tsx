import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router";

describe("Header", () => {
	it("renders the header", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);
		// Adjust the text below to match your header content
		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getAllByRole("link")).toHaveLength(5);
		expect(
			screen.getByRole("link", { name: "Skip to content" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: "Home page" }),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "☰" })).toBeInTheDocument();
		expect(
			screen.getByRole("navigation", { name: "Main" }),
		).toBeInTheDocument();
		expect(screen.getByRole("list")).toBeInTheDocument();

		expect(screen.getAllByRole("listitem")).toHaveLength(3);
	});
});
