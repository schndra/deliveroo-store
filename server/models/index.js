const sequelize = require("../db/connect");
const { DataTypes } = require("sequelize");

const User = require("./User")(sequelize, DataTypes);
const Restaurant = require("./Restaurant")(sequelize, DataTypes);
const Dish = require("./Dish")(sequelize, DataTypes);
const Category = require("./Category")(sequelize, DataTypes);

module.exports = {
  User,
  Restaurant,
  Dish,
  Category,
};
