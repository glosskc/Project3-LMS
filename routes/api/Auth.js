const router = require("express").Router();

// Matches with "/api/books"
router.route("/")
  .post((req, res) => {
      console.log(req.body);
  });

module.exports = router;
