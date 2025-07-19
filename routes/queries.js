const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/user");

const router = express.Router();

// GET /queries - get recent queries
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json(user?.recentQueries || []);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch queries" });
  }
});

// POST /queries - add a recent query
router.post("/", authMiddleware, async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ message: "Query is required" });

  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const filtered = user.recentQueries.filter((q) => q !== query);
    user.recentQueries = [query, ...filtered].slice(0, 5);
    await user.save();

    res.json(user.recentQueries);
  } catch (err) {
    res.status(500).json({ message: "Failed to save query" });
  }
});

module.exports = router;
