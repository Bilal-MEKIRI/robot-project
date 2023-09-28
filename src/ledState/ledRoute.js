const express = require("express");
const router = express.Router();
const { postLedState, getLedState } = require("./ledController.js");

router.post("/ledState", postLedState);
router.get("/getLedState", getLedState);

module.exports = router;
