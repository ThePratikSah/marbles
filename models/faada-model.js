const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const FaadaModel = sequelize.define("faada", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  serialNo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  weight: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  }
});

module.exports = FaadaModel;