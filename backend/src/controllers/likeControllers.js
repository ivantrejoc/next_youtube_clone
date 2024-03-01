const { Like, Video } = require("../DB_connection");

const createLike = async (user_id, video_id) => {
  try {
    await Like.create({
      user_id,
      video_id
    });

    const likeVideo = await Video.findByPk(video_id);
    const sumaLike = likeVideo.like_count + 1;
    const sumaPopular = likeVideo.popularity_count + 10;

    console.log("VIENE DE TABLA VIDEO: ", likeVideo.like_count);
    await Video.update(
      {
        like_count: sumaLike,
        popularity_count: sumaPopular 
      },
      {
        where: {
          id:video_id
        }
      }
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  createLike
};
