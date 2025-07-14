const express = require("express");
const cors = require("cors");
const { suggest } = require("./component-suggester");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- API Endpoint ---
app.post("/suggest", (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  // Use the imported function
  const suggestions = suggest(prompt); 
  res.json(suggestions);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});