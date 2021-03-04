const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");
const {addCustomer} = require('../controllers/customer/add-customer');
const router = express.Router();

//all the mine's expense routes will be here
router.post('/add-customer',[
  body('name').not().isEmpty().trim().escape(),
], isAuth, addCustomer);

module.exports = router;