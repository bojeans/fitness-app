import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT || 5002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
