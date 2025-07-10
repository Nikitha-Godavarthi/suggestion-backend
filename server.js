const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Hardcoded snippets
const snippets = [
  {
    id: 1,
    keywords: ["button", "submit", "click"],
    react: `<button onClick={() => console.log('Clicked')}>Submit</button>`,
    angular: `<button (click)="onSubmit()">Submit</button>`,
  },
  {
    id: 2,
    keywords: ["input", "text", "form"],
    react: `<input type="text" placeholder="Enter text" />`,
    angular: `<input type="text" placeholder="Enter text">`,
  },
];

// Helper to match prompt to keywords
function findMatches(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  return snippets.filter(snippet =>
    snippet.keywords.some(keyword => lowerPrompt.includes(keyword))
  );
}

// POST /suggest
app.post("/suggest", (req, res) => {
  const { prompt } = req.body;
  const matches = findMatches(prompt);
  res.json({ matches });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
