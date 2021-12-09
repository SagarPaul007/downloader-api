const express = require("express");
const cors = require("cors");
const { getMovies } = require("./util");

// our app
const app = express();

// CORS policy
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.static("./static"));
const port = process.env.PORT || 5000; // default port

// pages

// index page
app.get("/", (res) => {
  res.render("index.html");
});

// get links
app.get("/search", async (req, res) => {
  const name = req.query.name;
  const fast = req.query.fast;
  try {
    const movies = await getMovies(name, fast);
    res.send(movies);
    console.log(movies.length);
  } catch (err) {
    res.status(404);
    res.send({
      error: err.message,
      fix: "Please check your movie/show name",
    });
  }
});

app.listen(port, () => {
  console.log("Running ...");
});
