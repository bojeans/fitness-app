import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Users from "../pages/users";
import api from "../api/api";

jest.mock("../api/api");

// Simple test checking for Heading
describe("Users component", () => {
  it("renders a heading", () => {
    render(<Users />);
    const heading = screen.getByText("User List");
    expect(heading).toBeInTheDocument();
  });

  // Test to check if the user data is rendered
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

  // Test to check if the error message is rendered
  it("displays an error message when the API call fails", async () => {
    // Mock api.getUsers to reject with an error
    (api.getUsers as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch users")
    );

    await act(async () => {
      render(<Users />);
    });

    // Wait for the Users component to re-render after the getUsers promise rejects
    await waitFor(() => {
      const errorMessage = screen.getByText(
        "Error fetching users: Failed to fetch users"
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
  // Test to check for loading state
  // Test to check if empty state (no users)
});
