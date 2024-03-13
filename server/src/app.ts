import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";

const app = express();

// Middlewares
app.use(cors());
app.use("/users", usersRouter);

export default app;
