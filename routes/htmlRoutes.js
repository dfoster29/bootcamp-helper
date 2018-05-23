
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      return res.sendFile(path.join(__dirname, "../public/home.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    }
  });

  app.get("/signup", function(req, res) {
    if (req.user) {
      return res.sendFile(path.join(__dirname, "../public/home.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    }
  });
};
