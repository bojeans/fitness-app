import express from "express";

const testRouter = express.Router();

testRouter.get("/", async (req, res) => {
  try {
    // Simulate an asynchronous operation
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("test"), 1000);
    });
    console.log(result);
    res.json(result);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default testRouter;
