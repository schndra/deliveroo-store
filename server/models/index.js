const sequelize = require("../db/connect");
const { DataTypes } = require("sequelize");

const User = require("./User")(sequelize, DataTypes);
const Restaurant = require("./Restaurant")(sequelize, DataTypes);
const Dish = require("./Dish")(sequelize, DataTypes);
const Category = require("./Category")(sequelize, DataTypes);

Category.hasMany(Dish, {
  foreignKey: "catId",
});

Dish.belongsTo(Category, {
  foreignKey: "catId",
});

Restaurant.belongsToMany(Category, {
  through: "restaurantcategories",
  foreignKey: "resId",
  otherKey: "catId",
});
Category.belongsToMany(Restaurant, {
  through: "restaurantcategories",
  foreignKey: "catId",
  otherKey: "restId",
});

module.exports = {
  User,
  Restaurant,
  Dish,
  Category,
};
