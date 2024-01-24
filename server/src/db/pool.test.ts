import { Pool } from "pg";
import pool from "./pool";

describe("Database connection", () => {
  it("should connect to the database", async () => {
    try {
      const client = await pool.connect();
      expect(client).toBeInstanceOf(Pool);
      client.release();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
