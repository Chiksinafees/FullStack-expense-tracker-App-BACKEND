const Sequelize = require("sequelize"); // give class or constructor function

const sequelize = new Sequelize("add-Expenses", "root", "Nafees@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
