import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("./pages/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.resolve("./pages/contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./pages/404.html"));
  res.statusCode = 404;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
