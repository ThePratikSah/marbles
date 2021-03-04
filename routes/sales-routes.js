const express = require("express");
const {isAuth} = require("../middleware/is-auth");
const {body} = require("express-validator");
const {addSales} = require("../controllers/sales/add-sales");

const router = express.Router();

//all the sales routes will be here
router.post('/add-sales', isAuth, addSales);

module.exports = router;