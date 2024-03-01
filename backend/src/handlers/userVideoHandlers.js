const { Router } = require("express");
const {
  createUserVideo, getUserVideos } = require("../controllers/userVideoControllers");

const router = Router();

//Controler crear userVideo:
router.post("/", async (req, res) => {
  const { user_id, video_id } = req.body;
  try {
    await createUserVideo(user_id, video_id);
    res.status(201).json("USER VIDEO CREATED");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



//obtener uservideos:
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const videos = await getUserVideos(id);
    console.log("ESTOY RESPONDIENDO AL GET DE USER VIDEO");
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;