import express from "express";

const testRouter = express.Router();

testRouter.get("/", async (req, res) => {
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("this is working yay"), 1000);
    });
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default testRouter;
