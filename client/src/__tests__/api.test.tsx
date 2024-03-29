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
