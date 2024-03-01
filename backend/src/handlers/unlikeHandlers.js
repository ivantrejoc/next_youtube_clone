const { Router } = require("express");
const { createunLike } = require("../controllers/unlikeControllers");

const router = Router();

//Controler crear user:
router.post("/", async (req, res) => {
  const { user_id, video_id } = req.body;
  try {
    await createunLike(user_id, video_id);
    res.status(201).json("UNLIKE CREATED");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
