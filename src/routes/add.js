const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");

module.exports = (app) =>
  app.post("/add", cookieJwtAuth, (req, res) => {
    res.redirect("/welcome");
  });