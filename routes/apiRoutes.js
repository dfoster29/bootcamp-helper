
var path = require("path");

module.exports = function(app) {
  app.get("/api/loginCheck", function(req, res) {
    if (req.user) {
      res.json(true);
    } else {
      res.json(false);
    }
  })
};
