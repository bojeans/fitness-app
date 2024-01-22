import { Pool } from "pg";

const port = process.env.POSTGRES_PORT || "5432";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(port),
});

export default pool;
