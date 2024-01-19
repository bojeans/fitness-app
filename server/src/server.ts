// server/src/server.ts
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
