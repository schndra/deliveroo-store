const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
