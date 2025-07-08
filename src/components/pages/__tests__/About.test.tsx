import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About page", () => {
    it("renders the heading", () => {
        render(<About />);
        expect(
            screen.getByRole("heading", {
                name: "About page. Actually, it is not.",
            }),
        ).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "here" })).toBeInTheDocument();
    });
});
