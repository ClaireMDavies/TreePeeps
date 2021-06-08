const router = require("express").Router();
const contributionController = require("../../controllers/contributionController");

// Matches with "/api/contributions"
router.route("/")
//   .get(contributionController.findAll)
  .post(contributionController.create);

module.exports = router;
