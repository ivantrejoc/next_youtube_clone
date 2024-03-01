const { Router } = require("express");
const handlersUser = require("../handlers/userHandlers");
const handlersVideos = require("../handlers/videoHandlers");
const handlersComment = require("../handlers/commentHandlers");
const handlersLike = require("../handlers/likeHandlers");
const handlersUnlike = require("../handlers/unlikeHandlers");
const handlersUserVideo = require("../handlers/userVideoHandlers");
const router = Router();

// router.use("/");
//Rutas de user
router.use("/user", handlersUser);
//Rutas de comments
router.use("/comment", handlersComment);
//Rutas de likes
router.use("/like", handlersLike);
//Rutas de unlikes
router.use("/unlike", handlersUnlike);
//Rutas de videos
router.use("/video", handlersVideos);
//Rutas de userVideos
router.use("/uservideo", handlersUserVideo);

module.exports = router;