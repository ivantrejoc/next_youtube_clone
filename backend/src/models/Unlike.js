const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Unlike", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },

    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      foreignKey: true,
      allowNull: false
    },
    video_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      foreignKey: true,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: -5
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: Date
    }
  });
};
