import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Users from "../pages/users";
import api from "../api/api";

jest.mock("../api/api");

describe("Users component", () => {
  it("renders a heading", () => {
    render(<Users />);
    const heading = screen.getByText("User List");
    expect(heading).toBeInTheDocument();
  });

  it("renders user data", async () => {
    // Mock user data
    const users = [
      { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
      { id: 2, name: "Rachel Something", age: 83, email: "rachel@example.com" },
    ];

    // Mock api.getUsers
    (api.getUsers as jest.Mock).mockResolvedValue(users);

    await act(async () => {
      render(<Users />);
    });

    // Wait for the Users component to re-render after the getUsers promise resolves
    await waitFor(() => {
      users.forEach(async (user) => {
        const listItem = await screen.findByTestId(`user-${user.id}`);
        expect(listItem).toBeInTheDocument();
      });
    });
  });
});
