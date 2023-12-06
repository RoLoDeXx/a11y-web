const pa11y = require("pa11y");
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api/test", async (req, res) => {
  if (!req.query.url) {
    res.status(400).json({ error: "No URL passed" });
  } else {
    const response = await pa11y("https://www.netflix.com/");
    res.status(200).json(response);
  }
});

app.listen(PORT, () => {
  console.log("Running on PORT", PORT);
});
