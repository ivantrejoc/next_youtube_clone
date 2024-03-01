const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
          id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
          },

          name:{
            type: DataTypes.TEXT,
            allowNull: false            
          },

          email:{
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false
          },

          password:{
            type: DataTypes.STRING,
            allowNull: false
          }

        },
        {
            timestamps: true
          }
    );
}