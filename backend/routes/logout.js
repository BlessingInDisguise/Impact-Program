const express = require("express");
const passport = require("../config/passport");
const router = express.Router();

router.post('/logout', function(req, res) {
    req.logout(function(err) {
      if (err) { return res.json(err); }
      res.redirect('/');
    });
});

module.exports = router;