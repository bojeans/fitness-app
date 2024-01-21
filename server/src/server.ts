import express from "express";
import cors from "cors";
import usersRouter from "../routes/users";
import testRouter from "../routes/simpleRouteTest";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.use(
  "/api/users",
  (req, res, next) => {
    console.log("Request to /api/users");
    next();
  },
  usersRouter
);

app.use(
  "/api/test",
  (req, res, next) => {
    console.log("Request to /api/test");
    next();
  },
  testRouter
);

app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
