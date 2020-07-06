const express = require("express");
const router = express.Router();

const { testGetFunction, testPostFunction } = require("../controllers/test");

router.get("/", testGetFunction);
router.post("/", testPostFunction);

module.exports = router;
