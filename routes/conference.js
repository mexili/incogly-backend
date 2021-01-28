const express = require("express");
const router = express.Router();

const conferenceController = require("../controllers/conference");

router.get("/join", conferenceController.joinCall);

module.exports = router;
