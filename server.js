const express = require("express");
const cors = require("cors");
const { suggest } = require("./component-suggester");
const { addRecentQuery, getRecentQueries } = require("./recent-queries");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Suggest endpoint
app.post("/suggest", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const suggestions = suggest(prompt);
  addRecentQuery(prompt); // Save to memory
  res.json(suggestions);
});

// Get recent queries
app.get("/recent-queries", (req, res) => {
  res.json({ queries: getRecentQueries() });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
