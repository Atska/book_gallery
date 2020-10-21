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

let lul = "Darrow is a Helldiver. A pioneer of Mars.

Born to slave beneath the earth so that one day, future generations might live above it.

He is a Red - humankind's lowest caste. But he has something the Golds - the ruthless ruling class - will never understand.

He has a wife he worships, a family who give him strength. He has love.

And when they take that from him, all that remains is revenge . . ."