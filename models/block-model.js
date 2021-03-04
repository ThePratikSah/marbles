const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const FaadaModel = require("../models/faada-model");

const BlockModel = sequelize.define("block", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  faadaId: {
    type: Sequelize.INTEGER,
    references: {
      model: FaadaModel,
      key: 'id',
    }
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
  },
  length: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  width: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  height: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  }
});

module.exports = BlockModel;