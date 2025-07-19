const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const { suggest } = require("./component-suggester");

dotenv.config();

const app = express();
const PORT = 3001;

//Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://visa-ui-suggestion-system.vercel.app"],
  credentials: true,
}));
app.use(express.json()); 

// Routes
app.use("/auth", authRoutes);

const queryRoutes = require("./routes/queries");
app.use("/queries", queryRoutes);

const favoriteRoutes = require("./routes/favorites");
app.use("/favorites", favoriteRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/suggest", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  const suggestions = suggest(prompt);
  res.json(suggestions);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
