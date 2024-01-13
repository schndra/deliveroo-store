const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connect");

module.exports = sequelize.define(
  "Test",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING(300),
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// module.exports = Tweet;
