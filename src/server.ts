import express, { request } from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello Word - NLW#04" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Alterado !" });
});

app.listen(3333, () => console.log("Server is running!"));
