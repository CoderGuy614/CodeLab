const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/auth");
const { userSignupValidator, validate } = require("../validator/userSignup");

router.post("/signup", userSignupValidator(), validate, signup);

module.exports = router;
