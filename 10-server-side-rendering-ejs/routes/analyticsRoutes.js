const express = require("express");
const { getAnalytics } = require("../controller/analyticsController");
const router = express.Router();

router.route("/:shortid").get(getAnalytics);

module.exports = router;
