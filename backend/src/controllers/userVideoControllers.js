const { UserVideo, Video } = require("../DB_connection");


//Crear nuevo vidoe visto
const createUserVideo = async (user_id, video_id) => {
  try {
    await UserVideo.create({
      user_id,
      video_id
    });
  } catch (error) {
    console.error(error.message);
  }
};


const getUserVideos = async (id) => {
  try {
    const userVideos = await UserVideo.findAll({
      where: {
        user_id: id
      },
      include: [
        {
          model: Video,
          attributes: ['id', 'title', 'link', 'like_count', 'unlike_count', 'popularity_count']
        }
      ]
    });
    return userVideos;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createUserVideo,
  getUserVideos
};
