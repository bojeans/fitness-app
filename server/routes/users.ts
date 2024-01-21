// users.ts

import express from "express";
import pool from "../db/pool";

const usersRouter = express.Router();

usersRouter.get("/api/users", async (req, res) => {
  try {
    const client = await pool.connect();

    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);

    // Release the client back to the pool
    client.release();
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default usersRouter;
