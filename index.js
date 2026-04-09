import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Chaos-agent online. Michelle mode activated.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
