console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

const http = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}, URL: ${url}`);
  }
  return await response.json();
};

const api = {
  getUsers: () => http(`${process.env.NEXT_PUBLIC_API_URL}/users`),
};

export default api;
