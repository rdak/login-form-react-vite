import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router";

describe("Home page", () => {
    it("renders the home heading", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
        );
        expect(
            screen.getByRole("heading", {
                name: "Hi there! This is a simple test site and login form with Vite+React.",
            }),
        ).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
    });
});
