import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import testRouter from "./routes/simpleRouteTest";
import swaggerUI from "swagger-ui-express";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { JsonObject } from "swagger-ui-express";

const app = express();
const swaggerFile: JsonObject = yaml.load(
  fs.readFileSync(path.join(__dirname, "../../"), "utf8")
) as JsonObject;

// Middlewares
app.use(cors());
app.use("/users", usersRouter);
app.use("/test", testRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

export default app;
