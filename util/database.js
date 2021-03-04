const Sequelize = require("sequelize");

// const sequelize = new Sequelize("marble", "root", "", {
//   dialect: "mysql",
//   host: "localhost",
// });

const sequelize = new Sequelize("mysql://b3ddecbc4ca42c:52f33026@eu-cdbr-west-03.cleardb.net/heroku_2e44c0e28ae22a5?reconnect=true", {
  dialect: "mysql"
})

module.exports = sequelize;
