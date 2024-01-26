import dotenv from "dotenv";
import { Pool, QueryResult } from "pg";
const envPath = process.env.NODE_ENV === "test" ? ".env.test" : ".env.docker";
dotenv.config({ path: envPath });

const portConverter = parseInt(process.env.POSTGRES_PORT || "5432");

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  port: portConverter,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    const queryAllSQL = `SELECT * FROM users`;
    const result: QueryResult = await client.query(queryAllSQL);
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

connectToDatabase();

export default pool;
