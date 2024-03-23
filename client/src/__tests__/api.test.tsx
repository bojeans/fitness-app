import api from "../api/api";

// Mock the global fetch function
global.fetch = jest.fn();

describe("Fetch from API", () => {
  afterEach(() => {
    // Clear all instances and calls to fetch
    (global.fetch as jest.Mock).mockClear();
  });

  it("calls http with the right URL for getUsers in development environment", async () => {
    // Mock fetch to resolve with an empty array
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });

    // Set NODE_ENV to "development" before calling getUsers
    process.env.NODE_ENV = "development";

    await api.getUsers();

    expect(global.fetch).toHaveBeenCalledWith("http://localhost:5001/users");
  });

  it("calls http with the right URL for getUsers in production environment", async () => {
    // Mock fetch to resolve with an empty array
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });

    // Set NODE_ENV to "production" before calling getUsers
    process.env.NODE_ENV = "production";

    await api.getUsers();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://fitness-app-beryl.vercel.app/users"
    );
  });

  it("throws an error if the response is not ok", async () => {
    // Mock fetch to resolve with an error
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    });

    // Set NODE_ENV to "development" before calling getUsers
    process.env.NODE_ENV = "development";

    await expect(api.getUsers()).rejects.toThrow("HTTP error! status: 404");
  });
});
