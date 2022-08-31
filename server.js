const express = require("express");
const path = require("path");

const terms = require("./package.json");
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.static(""));

app.get("/notes", (req, res) => res.json(db));

app.get(
  "/notes",
  (req, res) => res.sendFile(path.join(__dirname, "notes.html"))
  //change path to notes.html
);

app.listen(PORT, () =>
  console.log("Example app listening at http://localhost:${PORT}")
);

//guide on activity 26, guide to deploy on heroku, also in slack
//move entire assets folder into public folder
//just set up routes in express app with port, app.listen for PORT, test with insomnia
//test frequently, every time new HTML request method, test in insomnia, make sure you are getting what you want back
//make a routes folder, have some JS files in there for separating HTML and API routes (not necessary)
//use * for undefined paths
//POST for new notes, get all notes, and deleting is extra credit.
