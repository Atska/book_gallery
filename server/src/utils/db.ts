import mysql, { Pool } from "mysql";

const db: Pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "",
  password: "",
  database: "",
});

export default db;
