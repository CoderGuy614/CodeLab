const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/auth");
const { testMiddlewareFunction } = require("../testMiddleware");

router.post("/signup", testMiddlewareFunction, signup);

module.exports = router;
