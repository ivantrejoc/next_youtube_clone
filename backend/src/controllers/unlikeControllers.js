const { Unlike, Video } = require("../DB_connection");

const createunLike = async (user_id, video_id) => {
  try {
    await Unlike.create({
      user_id,
      video_id
    });

    const unlikeVideo = await Video.findByPk(video_id);
    const sumaUnlike = unlikeVideo.unlike_count + 1;
    const restaPopular = unlikeVideo.popularity_count - 5;

    console.log("VIENE DE TABLA VIDEO: ", unlikeVideo.unlike_count);
    await Video.update(
      {
        unlike_count: sumaUnlike,
        popularity_count: restaPopular 
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
  createunLike
};
