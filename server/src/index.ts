import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql, { Pool } from "mysql";
//import db from "./utils/db";

const app: Application = express();
const port: number = 3001;

/**
 * ==========
 *   Middlewares
 * ==========
 */
app.use(cors());
app.use(bodyParser.json()); // Alternative: app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const db: Pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "user",
  password: "password",
  database: "name",
});

app.get("/", (req: Request, res: Response) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
