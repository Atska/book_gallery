import db from "../utils/db";
import { Request, Response } from "express";
import { MysqlError, Query } from "mysql";

class BookController {
  getBooks = (req: Request, res: Response) => {
    try {
      const query =
        "SELECT * FROM book INNER JOIN covers ON book.book_id = covers.book_id;";
      db.query(query, (error: MysqlError, result: Query) => {
        if (error) throw error;
        res.send(result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  postBook = (req: Request, res: Response) => {
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
  };

  deleteBook = (req: Request, res: Response) => {
    const { book_id } = req.query;
    const query = `DELETE FROM book WHERE book_id=${book_id}`;
    const queryImg = `DELETE FROM covers WHERE book_id=${book_id}`;

    try {
      db.query(query, (error: MysqlError, result: any) => {
        if (error) throw error;
        db.query(queryImg, (error, result: any) => {
          if (error) throw error;
          res.send(result.status);
        });
      });
    } catch (error) {
      throw error;
    }
  };
}

export default new BookController();
