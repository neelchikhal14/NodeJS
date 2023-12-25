const { response } = require("express");
const { urlModel } = require("../models/urlModel");

async function getAnalytics(req, res) {
  const shortid = req.params.shortid;

  const result = await urlModel.findOne({ shortId: shortid });
  console.log(result);
  return res.render("home", {
    result: result.visitHistory,
  });
  // return res.json({
  //   totalClick: result.visitHistory.length,
  //   analytics: result.visitHistory,
  // });
}

module.exports = { getAnalytics };
