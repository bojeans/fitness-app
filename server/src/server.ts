import express from "express";
import cors from "cors";
import usersRouter from "../routes/users";
import testRouter from "../routes/simpleRouteTest";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use("/users", usersRouter);
app.use("/test", testRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
