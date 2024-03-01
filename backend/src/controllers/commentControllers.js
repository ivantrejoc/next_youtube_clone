const { Comment } = require("../DB_connection");

//Crear Comment:
const createComment = async (user_id, video_id, name_user, comment ) => {
    try {
      await Comment.create({
        user_id,
        name_user,
        video_id,
        comment
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  //Crear lotes de Comments:
const bulkCreateComments = async (commentsData) => {
    try {
       await Comment.bulkCreate(commentsData);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Obtener Comments:
  const getComments = async () => {
    try {
      const comments = await Video.findAll();
      return comments;
    } catch (error) {
      console.error(error.message);
    }
  };

  module.exports = {
    createComment,
    getComments,
    bulkCreateComments
  }