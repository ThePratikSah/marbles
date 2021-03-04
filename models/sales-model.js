const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const CustomerModel = require("../models/customer-model");

const Sales = sequelize.define("sales", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  customer_Id: {
    type: Sequelize.INTEGER,
    references: {
      model: CustomerModel,
      key: 'id',
    }
  },
  stoneType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  quality: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  weight: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  rate: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  paymentMode: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  paymentDate: {
    type: Sequelize.DATE,
    allowNull: true,
  }
});

module.exports = Sales;