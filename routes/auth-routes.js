const express = require("express");
const {body} = require('express-validator');

//importing auth' controller
const {login} = require("../controllers/auth/login");
const {register} = require("../controllers/auth/register");

const router = express.Router();

router.post("/register", [
  body('email').isEmail(),
  body('password').isLength({min: 8})
], register);

router.post('/login', [
  body('email').isEmail(),
  body('password').isLength({min: 8})
], login);

module.exports = router;