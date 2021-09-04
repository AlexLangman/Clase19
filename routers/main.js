const express = require("express");
const router = express.Router();
const mainController = require("../contorllers/mainController.js")

router.get("/", mainController.index)

module.exports = router