"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dish.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      catId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dish",
    }
  );
  return Dish;
};
