const http = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const api = {
  getUsers: () =>
    http(
      process.env.NODE_ENV === "development"
        ? "http://localhost:5001/users"
        : "https://fitness-app-beryl.vercel.app/users"
    ),
};

export default api;
