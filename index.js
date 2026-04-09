import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Chaos-agent online. Michelle mode activated.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
