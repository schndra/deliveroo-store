const sequelize = require("../db/connect");
const { DataTypes } = require("sequelize");

const User = require("./User")(sequelize, DataTypes);

module.exports = {
  User,
};
