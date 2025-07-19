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
const allowedOrigins = [
  "http://localhost:5173",
  "https://visa-ui-suggestion-system.vercel.app",
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));



const queryRoutes = require("./routes/queries");
app.use("/queries", queryRoutes);

const favoriteRoutes = require("./routes/favorites");
app.use("/favorites", favoriteRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/auth", authRoutes);

app.post("/suggest", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  const suggestions = suggest(prompt);
  res.json(suggestions);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
