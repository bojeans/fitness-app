CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER,
  email VARCHAR(100) UNIQUE
);