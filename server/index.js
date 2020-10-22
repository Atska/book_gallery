const express = require("express");
const db = require("./src/utils/db.js.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(cors());
// Only for Post request. A method to recognize the incoming Request Object as a JSON Object. Alternative: app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/submit", (req, res) => {
  const movieInput = req.body.movieInput;
  const reviewInput = req.body.reviewInput;
  const sqlInsert = "INSERT INTO books (name, review) VALUES (?, ?)";
  db.query(sqlInsert, [movieInput, reviewInput], (err, result) => {
    if (err) throw err;
    res.send("Insert done");
  });
});

app.get("/all", (req, res) => {
  const sqlInsert = "SELECT * FROM books";
  db.query(sqlInsert, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

let lul =
  "https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/red_rising_by_pierce_brown.jpg";
