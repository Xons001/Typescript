import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (req, res) => {
  console.log("someone is pinging");
  res.send("pong");
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
