const { Router } = require("express");
const {
  createVideo,
  getVideos,
  bulkCreateVideos,
  getVideoById,
  getMostPopularVideos
} = require("../controllers/videoControllers");

const router = Router();

//Controler crear video:
router.post("/", async (req, res) => {
  const { title, link } = req.body;
  try {
    await createVideo(title, link);
    res.status(201).json("VIDEO CREATED");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Carga masiva videos:
router.post("/massive", async (req, res) => {
  try {
    const videosData = req.body;
    if (!videosData) {
      throw new Error("Falta los videos");
    }

    await bulkCreateVideos(videosData);
    return res.status(201).send("VIDEOS CREATED");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Obtener todos los videos:
router.get("/", async (req, res) => {
  try {
    const videos = await getVideos();
    console.log("ESTOY RESPONDIENDO AL GET DE TODOS LOS VIDEOS", videos);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//obtener videos más populares:
router.get("/popular", async (req, res) => {
  try {
    const videos = await getMostPopularVideos();
    console.log("ESTOY RESPONDIENDO AL GET DE VIDEOS POPULARES", videos);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//obtener video por id:
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const videos = await getVideoById(id);
    console.log("ESTOY RESPONDIENDO AL GET DE TODOS LOS VIDEOS");
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = router;
