import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import { MysqlError, Query } from "mysql";
import db from "./utils/db";

const app: Application = express();
const port: number = 3001;

/**
 * ==========
 *  Middlewares
 * ==========
 */
app.use(cors());
app.use(bodyParser.json()); // Alternative: app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("lul");
});

app.get("/books", (req: Request, res: Response) => {
  try {
    const query =
      "SELECT * FROM book INNER JOIN covers ON book.book_id = covers.book_id;";
    db.query(query, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/book", (req: Request, res: Response) => {
  try {
    let book_id;
    const { title, author, series, date, isbn, link, blurp } = req.body;

    const query =
      "INSERT INTO book (title, author, published, isbn, series, blurp) VALUES (?, ?, ?, ?, ?, ?)";
    const queryImg = "INSERT INTO covers (book_id, link) VALUES (?, ?);";
    const queryId = `SELECT book_id FROM book WHERE title LIKE "%${title}%" ORDER BY book_id DESC LIMIT 1`;

    db.query(
      query,
      [title, author, date, isbn, series, blurp],
      (error, result) => {
        if (error) throw error;
        db.query(queryId, (error, result) => {
          if (error) throw error;
          book_id = result[0].book_id;
          db.query(queryImg, [book_id, link], (error, result) => {
            if (error) throw error;
            console.log(result);
          });
        });
      }
    );
  } catch (error) {
    throw error;
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
