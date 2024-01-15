"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      provider: DataTypes.STRING,
      username: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      googleId: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: "USER",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
