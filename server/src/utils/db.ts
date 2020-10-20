import mysql, { Pool } from "mysql";

const db: Pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "user",
  password: "password",
  database: "name",
});

export default db;
