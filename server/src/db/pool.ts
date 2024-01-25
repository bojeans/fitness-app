import dotenv from "dotenv";
import { Pool, QueryResult } from "pg";
dotenv.config();

const portConverter = parseInt(process.env.POSTGRES_PORT || "5432");

console.log("PostgreSQL connection parameters:", {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  port: process.env.POSTGRES_PORT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  port: portConverter,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

console.log(pool);

const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to the database");

    const queryAllSQL = `SELECT * FROM users`;
    const result: QueryResult = await client.query(queryAllSQL);
    console.log("Found result:", result.rows);

    client.release();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

connectToDatabase(); // Initiate the database connection

export default pool;
