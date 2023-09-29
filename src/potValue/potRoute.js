const express = require("express");
const router = express.Router();
const { postPotValue, getPotValue } = require("./potController.js");

router.post("/postPotValue", postPotValue);
router.get("/getPotValue", getPotValue);

module.exports = router;
