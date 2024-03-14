import api from "../api/api";

// Mock the global fetch function
global.fetch = jest.fn();

describe("Fetch from API", () => {
  afterEach(() => {
    // Clear all instances and calls to fetch
    (global.fetch as jest.Mock).mockClear();
  });

  it("calls http with the right URL for getUsers", async () => {
    // Mock fetch to resolve with an empty array
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });

    await api.getUsers();

    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/users`
    );
  });
  it("throws an error if the response is not ok", async () => {
    // Mock fetch to resolve with an error
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(api.getUsers()).rejects.toThrow("HTTP error! status: 404");
  });
});

describe("Error Handling for Production Environment Variable", () => {
  beforeAll(() => {
    // Unset NEXT_PUBLIC_API_URL or set it to an unexpected value
    delete process.env.NEXT_PUBLIC_API_URL;
    // OR
    process.env.NEXT_PUBLIC_API_URL = "unexpected-value";
  });

  afterAll(() => {
    // Reset environment variable after tests
    process.env.NEXT_PUBLIC_API_URL = "https://fitness-app-beryl.vercel.app";
  });

  it("throws an error when NEXT_PUBLIC_API_URL is undefined", async () => {
    await expect(api.getUsers()).rejects.toThrow("API URL is not defined");
  });

  it("throws an error when NEXT_PUBLIC_API_URL is set to an unexpected value", async () => {
    await expect(api.getUsers()).rejects.toThrow("Invalid API URL");
  });
});
