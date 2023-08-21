const Sequalize = require("sequelize");

const sequelize = require("../util/dataBase");

const Expense = sequelize.define("Exp", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  expense: {
    type: Sequalize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

module.exports = Expense;
