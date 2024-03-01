const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Video",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      link: {
        type: DataTypes.STRING,
        allowNull: false
      },

      like_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      unlike_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },

      popularity_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      timestamps: true
    }
  );
};
