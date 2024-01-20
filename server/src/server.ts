import express from "express";
import usersRouter from "../routes/users";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
