const { User, Comment } = require("../DB_connection");

//Crear User:
const createUser = async (name, email, password) => {
  try {
    await User.create({
      name,
      email,
      password
    });
  } catch (error) {
    console.error(error.message);
  }
};

const getUsers = async () => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Comment,
          attributes: ["video_id", "comment"],
        },
      ],
    });

    const usersData = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      comments: user.Comments.map((comment) => ({
        video_id: comment.video_id,
        comment: comment.comment,
      })),
    }));
    return usersData;
  } catch (error) {
    console.error(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    console.error(error.message);
  }
};

const login = async (email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    console.error(error.message);
  }
};



module.exports = {
  createUser,
  getUsers,
  getUserById,
  login
};
