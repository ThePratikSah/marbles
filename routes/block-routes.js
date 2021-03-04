const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");

const {addBlock} = require('../controllers/blocks/add-blocks');
const {dispatchBlock} = require("../controllers/blocks/dispatch-blocks");

const router = express.Router();

router.post('/add-block', isAuth, addBlock);

router.post('/dispatch-block', isAuth, dispatchBlock);

module.exports = router;