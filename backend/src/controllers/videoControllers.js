const sequelize = require("sequelize");
const { Video, Like, Unlike, Comment } = require("../DB_connection");
const { Op } = require("sequelize");

//Crear Videos:
const createVideo = async (title, link) => {
  try {
    await Video.create({
      title,
      link
    });
  } catch (error) {
    console.error(error.message);
  }
};

//Crear lotes de Videos:
const bulkCreateVideos = async (videosData) => {
  try {
    await Video.bulkCreate(videosData);
  } catch (error) {
    console.log(error.message);
  }
};

//Todos los videos
const getVideos = async () => {
  try {
    const videos = await Video.findAll({
      order: sequelize.literal("RANDOM()"), // Orden aleatorio
      include: {
        model: Comment,
        attributes: ["name_user", "comment"] // Solo seleccionamos los atributos necesarios de los comentarios
      }
    });
    return videos;
  } catch (error) {
    console.error(error.message);
  }
};

//Video por ID
const getVideoById = async (id) => {
  try {
    const video = await Video.findByPk(id, {
      include: [
        {
          model: Comment,
          attributes: ["name_user", "comment"] // Seleccionar los atributos deseados de Comment
        }
      ]
    });
    return video;
  } catch (error) {
    console.error(error.message);
  }
};

//5 Videos más populares
const getMostPopularVideos = async () => {
  console.log("ESTOY ENTRANDO AL CONTROLLER");
  try {
    let videos;
    const highestPopularityVideos = await Video.findAll({
      order: [["popularity_count", "DESC"]],
      limit: 5
    });

    //MISMO VALOR POPULARITY
    if (
      highestPopularityVideos.every(
        (video) =>
          video.popularity_count === highestPopularityVideos[0].popularity_count
      )
    ) {
      videos = await Video.findAll({
        order: sequelize.literal("RANDOM()"),
        limit: 5
      });
    } else {
      videos = highestPopularityVideos;
    }

    return videos;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  createVideo,
  bulkCreateVideos,
  getVideos,
  getVideoById,
  getMostPopularVideos
};
