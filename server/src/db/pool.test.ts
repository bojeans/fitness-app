import { PoolClient } from "pg";
import pool from "./pool";
import dotenv from "dotenv";
const envPath = process.env.NODE_ENV === "test" ? ".env.test" : ".env.docker";
dotenv.config({ path: envPath });

describe("Database connection", () => {
  it("should connect to the database", async () => {
    try {
      const client: PoolClient = await pool.connect();
      expect(client).toHaveProperty("query");
      expect(client).toHaveProperty("release");

      client.release();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
