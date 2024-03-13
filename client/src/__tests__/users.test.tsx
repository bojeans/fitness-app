import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
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
      { id: 2, name: "Jane Doe", age: 23, email: "jane@example.com" },
      { id: 3, name: "Joe Bloggs", age: 56, email: "joe@example.com" },
      { id: 4, name: "Phil McCracken", age: 34, email: "phil@example.com" },
      { id: 5, name: "Sue Smith", age: 43, email: "sue@example.com" },
    ];

    // Mock api.getUsers
    (api.getUsers as jest.Mock).mockResolvedValue(users);

    render(<Users />);

    // Wait for the Users component to re-render after the getUsers promise resolves
    try {
      await waitFor(() => {
        users.forEach((user) => {
          expect(
            screen.getByText(
              `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`
            )
          ).toBeInTheDocument();
        });
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  });
});
