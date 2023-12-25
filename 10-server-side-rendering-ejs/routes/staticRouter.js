const express = require("express");
const { urlModel } = require("../models/urlModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await urlModel.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

module.exports = router;
