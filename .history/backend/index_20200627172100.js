const express = require("express");
const newsapi = require("./newsapi");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

app.get("/articles", (req, res) => {
  newsapi.getMainArticles(req.query).then((response) => {
    res.json(response.body);
  });
});

app.get("/playstation", (req, res) => {
  newsapi.getPlayStationNews(req.query).then((response) => {
    res.json(response.body);
    console.log(response.body);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
