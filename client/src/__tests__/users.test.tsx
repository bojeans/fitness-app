import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Users from "../pages/users";

describe("loads and displays greeting", () => {
  it("renders a heading", () => {
    render(<Users />);
    const heading = screen.getByText("User List");
    expect(heading).toBeInTheDocument();
  });
});
