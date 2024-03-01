const { Router } = require("express");
const {
  createLike
} = require("../controllers/likeControllers");

const router = Router();

//Controler crear user:
router.post("/", async (req, res) => {
  const { user_id, video_id } = req.body;
  try {
    await createLike(user_id, video_id);
    res.status(201).json("LIKE CREATED");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;