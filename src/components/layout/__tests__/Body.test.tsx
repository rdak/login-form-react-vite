import { render, screen } from "@testing-library/react";
import Body from "../Body";

describe("Body", () => {
    it("renders children inside the body", () => {
        render(
            <Body>
                <h1>Test Content</h1>
            </Body>,
        );
        expect(
            screen.getByRole("heading", { name: "Test Content" }),
        ).toBeInTheDocument();
    });
});
