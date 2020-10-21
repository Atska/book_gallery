import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MysqlError, Query } from "mysql";
import db from "./utils/db";

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

app.get("/", (req: Request, res: Response) => {
  res.send("lul");
});

app.get("/books", (req: Request, res: Response) => {
  const query =
    "SELECT * FROM book INNER JOIN covers ON book.book_id = covers.book_id;";
  db.query(query, (error: MysqlError, result: Query) => {
    if (error) throw error;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
