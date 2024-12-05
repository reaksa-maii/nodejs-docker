const express = require("express");
const db = require("./connected/mysql");
const app = express();
const port = 3000;
db.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/app", (req, res) => {
  const q = "SELECT * FROM user";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
