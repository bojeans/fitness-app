import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText("hi");
    expect(heading).toBeInTheDocument();
  });
  it("renders a button with the provided label", () => {
    render(<Home />);
    const buttonElement = screen.getByText(/Users/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
