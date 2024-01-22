import express from "express";
import pool from "../../db/pool";

const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
  try {
    console.log("a");
    const { rows } = await pool.query("SELECT * FROM users");
    console.log("b");
    res.json(rows);
    console.log("c");
  } catch (error) {
    console.log("d");
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
    console.log("e");
  }
});

export default usersRouter;
