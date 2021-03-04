const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");

const {addFaada} = require("../controllers/faada/add-faada");

const router = express.Router();

//all the mine's expense routes will be here
//todo: add the body check here
router.post('/add-faada', isAuth, addFaada);

module.exports = router;