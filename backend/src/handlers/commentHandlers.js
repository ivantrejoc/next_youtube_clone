const { Router } = require("express");
const { createComment, getComments, bulkCreateComments } = require("../controllers/commentControllers");


const router = Router();

//Controller para crear Comments:
router.post("/", async (req, res) => {
    const { user_id, video_id, name_user, comment } = req.body;
    try {
      await createComment(user_id, video_id, name_user, comment);
      res.status(201).json("COMMENT CREATED");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  //Carga masiva videos:
router.post("/massive", async (req, res) => {
    try {
      const commentsData = req.body;
      if (!commentsData) {
        throw new Error("Falta los comments");
      }
  
      await bulkCreateComments(commentsData);
      return res.status(201).send("COMMENTS CREATED");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //Obtener todos los Comments:
  router.get("/", async (req, res) => {
    try {
      const comments = await getComments();
      console.log("ESTOY RESPONDIENDO AL GET DE TODOS LOS COMMENTS", comments);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;