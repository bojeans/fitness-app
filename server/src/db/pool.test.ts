import { connectToDatabase } from "./pool";
import dotenv from "dotenv";

const envPath = process.env.NODE_ENV === "test" ? ".env.test" : ".env.docker";
dotenv.config({ path: envPath });

describe("Database connection", () => {
  it("should connect to the database and return rows", async () => {
    try {
      const rows = await connectToDatabase();
      expect(rows).toBeInstanceOf(Array);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
