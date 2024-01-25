import dotenv from "dotenv";
dotenv.config();
import { Pool, QueryResult } from "pg";

const port = process.env.POSTGRES_PORT || "5432";

console.log("PostgreSQL connection parameters:", {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  port: parseInt(port, 10),
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

const pool = new Pool({
  host: process.env.POSTGRES_HOST || "localhost",
  user: process.env.POSTGRES_USER || "postgres",
  port: parseInt(port, 10),
  password: process.env.POSTGRES_PASSWORD || "password",
  database: process.env.POSTGRES_DB || "postgres",
});

const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to the database");

    const queryAllSQL = `SELECT * FROM users`;
    const result: QueryResult = await client.query(queryAllSQL);
    console.log("Found result:", result.rows);

    client.release();
    pool.end();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    pool.end();
  }
};

connectToDatabase();

export default pool;
