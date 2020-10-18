const mysql = require("mysql");

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "user",
  password: "password",
  database: "name",
});

module.exports = db;
