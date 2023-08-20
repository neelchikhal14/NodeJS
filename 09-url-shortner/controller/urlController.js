const nanoid = require("shortid");
const { urlModel } = require("../models/urlModel");
async function getNewShortUrl(req, res) {
  const shortId = nanoid(8);

  const body = req.body;
  if (!body.url || body.url.length === 0)
    return res
      .status(400)
      .json({ error: "URL is required and it should not be empty" });

  const generatedUrl = await urlModel.create({
    shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({
    id: shortId,
  });
}
async function getShortUrl(req, res) {
  const id = req.params.shortId;
  if (!id || id.length === 0)
    return res
      .status(400)
      .json({ error: "short URL is required and it should not be empty" });

  const entry = await urlModel.findOneAndUpdate(
    { shortId: id },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  if (entry) {
    return res.redirect(entry.redirectUrl);
  }
  return res.status(500).json({ error: "server error" });
}

module.exports = {
  getNewShortUrl,
  getShortUrl,
};
