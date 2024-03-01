require("dotenv").config();
require("pg");
const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const VideoModel = require("./models/Video");
const LikeModel = require("./models/Like");
const UnlikeModel = require("./models/Unlike");
const CommentModel = require("./models/Comment");
const UserVideoModel = require("./models/UserVideo");

const URL = process.env.DB_URL;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const NAME = process.env.DB_NAME;



//Conexión DB
//Local:

const sequelize = new Sequelize(
  `${URL}${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}`
);



// const sequelize = new Sequelize(NAME, USER, PASSWORD, {
//   host: HOST,
//   dialect: "postgres"
// });


//Prueba Conexión
const testing = async() =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testing();

UserModel(sequelize);
VideoModel(sequelize);
LikeModel(sequelize);
UnlikeModel(sequelize);
CommentModel(sequelize);
UserVideoModel(sequelize);

const { User, Video, Like, Unlike, Comment, UserVideo } = sequelize.models;

//Relaciones
//Likes
User.hasMany(Like, { foreignKey: "user_id", sourceKey: "id" });
Like.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
Video.hasMany(Like, { foreignKey: "video_id", sourceKey: "id" });
Like.belongsTo(Video, { foreignKey: "video_id", targetKey: "id" });

//Unlikes
User.hasMany(Unlike, { foreignKey: "user_id", sourceKey: "id" });
Unlike.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
Video.hasMany(Unlike, { foreignKey: "video_id", sourceKey: "id" });
Unlike.belongsTo(Video, { foreignKey: "video_id", targetKey: "id" });

//Comments
User.hasMany(Comment, { foreignKey: "user_id", sourceKey: "id" });
Comment.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
Video.hasMany(Comment, { foreignKey: "video_id", sourceKey: "id" });
Comment.belongsTo(Video, { foreignKey: "video_id", targetKey: "id" });

//UserVideo
User.hasMany(UserVideo, { foreignKey: "user_id", sourceKey: "id" });
UserVideo.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
Video.hasMany(UserVideo, { foreignKey: "video_id", sourceKey: "id" });
UserVideo.belongsTo(Video, { foreignKey: "video_id", targetKey: "id" });
module.exports = {
  User,
  Video,
  Like,
  Unlike,
  Comment,
  UserVideo,
  conn: sequelize
};
