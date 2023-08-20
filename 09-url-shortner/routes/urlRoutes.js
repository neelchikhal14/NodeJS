const express = require("express");
const { getNewShortUrl, getShortUrl } = require("../controller/urlController");

const router = express.Router();

router.route("/").post(getNewShortUrl);

router.route("/:shortId").get(getShortUrl);
module.exports = router;
