import dotenv from "dotenv";
dotenv.config();
import { Pool } from "pg";

const port = process.env.POSTGRES_PORT || "5432";

console.log("PostgreSQL connection parameters:", {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  port: parseInt(port, 10),
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

console.log("All environment variables:", process.env);

const pool = new Pool({
  host: process.env.POSTGRES_HOST || "fitness-app-db-1",
  user: process.env.POSTGRES_USER || "postgres",
  port: parseInt(port, 10),
  password: process.env.POSTGRES_PASSWORD || "password",
  database: process.env.POSTGRES_DB || "postgres",
});

console.log(pool);
console.log("All environment variables:", process.env);

// const pool = new Pool({
//   host: process.env.POSTGRES_HOST || "fitness-app-db-1",
//   user: process.env.POSTGRES_USER,
//   port: parseInt(port, 10),
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
// });

export default pool;
