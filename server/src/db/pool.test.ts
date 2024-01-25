import { PoolClient } from "pg";
import pool from "./pool";

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
