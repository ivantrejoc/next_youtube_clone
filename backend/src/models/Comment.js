const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Comment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },

    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      foreingKey: true,
      allowNull: false
    },

    name_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    video_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      foreingKey: true,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: Date
    }
  });
};
