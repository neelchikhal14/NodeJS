const { urlModel } = require("../models/urlModel");

async function getAnalytics(req, res) {
  const shortid = req.params.shortid;

  const result = await urlModel.findOne({ shortId: shortid });

  return res.json({
    totalClick: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { getAnalytics };
