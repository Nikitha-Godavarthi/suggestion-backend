const User = require("../models/user")

const saveFavorite = async (req, res) => {
  const { prompt, code } = req.body
  try {
    const user = await User.findById(req.userId)
    if (!user) return res.status(404).json({ message: "User not found" })

    // Check for existing favorite to prevent duplicates
    const existingFavorite = user.favorites.find((fav) => fav.prompt === prompt && fav.code === code)

    if (existingFavorite) {
      return res.status(200).json({ message: "Already in favorites", favorites: user.favorites })
    }

    user.favorites.push({ prompt, code })
    await user.save()
    res.status(201).json(user.favorites) // Return updated favorites list
  } catch (error) {
    console.error("Error saving favorite:", error)
    res.status(500).json({ message: "Failed to save favorite" })
  }
}

const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
    if (!user) return res.status(404).json({ message: "User not found" })
    res.json(user.favorites || [])
  } catch (error) {
    console.error("Error fetching favorites:", error)
    res.status(500).json({ message: "Failed to fetch favorites" })
  }
}

const deleteFavorite = async (req, res) => {
    try {
      const user = await User.findById(req.userId)
      if (!user) return res.status(404).json({ message: "User not found" })
  
      const favoriteId = req.params.id
      user.favorites = user.favorites.filter((fav) => fav._id.toString() !== favoriteId)
  
      await user.save()
      res.status(200).json(user.favorites)
    } catch (error) {
      console.error("Error deleting favorite:", error)
      res.status(500).json({ message: "Failed to delete favorite" })
    }
  }

module.exports = { saveFavorite, getFavorites, deleteFavorite }
