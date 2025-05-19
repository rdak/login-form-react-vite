import { render, screen } from "@testing-library/react";
import ProtectedRoute from "../ProtectedRoute";
import { BrowserRouter } from "react-router";

describe("ProtectedRoute", () => {
	it("renders chidren", () => {
		localStorage.setItem(
			"token",
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhleSBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.EOEPtPBWAcTE0PvnE6FrKfQmoe3VdCqBXOOObpIMTcs"
		);

		render(
			<BrowserRouter>
				<ProtectedRoute>
					<h1>some heading</h1>
				</ProtectedRoute>
			</BrowserRouter>
		);
		expect(
			screen.getByRole("heading", {
				name: "some heading",
			})
		).toBeInTheDocument();
	});

	it("renders nothing", () => {
		localStorage.removeItem("token");
		render(
			<BrowserRouter>
				<ProtectedRoute>
					<h1>some heading</h1>
				</ProtectedRoute>
			</BrowserRouter>
		);
		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
	});
});
