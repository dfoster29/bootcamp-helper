
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

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

    // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
};
