const express = require("express");
const { saveFavorite, getFavorites, deleteFavorite} = require("../controllers/favoriteController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, saveFavorite);
router.get("/", authMiddleware, getFavorites);
router.delete("/:id", authMiddleware, deleteFavorite)

module.exports = router;
