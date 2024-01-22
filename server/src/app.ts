import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import testRouter from "./routes/simpleRouteTest";

const app = express();

// Middlewares
app.use(cors());
app.use("/users", usersRouter);
app.use("/test", testRouter);

export default app;
