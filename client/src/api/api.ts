import * as dotenv from "dotenv";
dotenv.config();

const http = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const api = {
  getUsers: () => http(`${process.env.NEXT_PUBLIC_API_URL}/users`),
};
console.log(api.getUsers());

export default api;
