import express, { Application } from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
// Controller
import BookController from "./Controller/BookController";

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

/**
 * ==========
 *  Http Methods
 * ==========
 */
app.get("/books", BookController.getBooks);
app.post("/books", BookController.postBook);
app.delete("/books/:id", BookController.deleteBook);
app.patch("/books/:id", BookController.updateBook);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
