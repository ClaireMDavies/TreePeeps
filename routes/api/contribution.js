const router = require("express").Router();
const contributionController = require("../../controllers/contributionController");

// Matches with "/api/contributions"
router.route("/")
  .post(contributionController.create);
router.route("/:id")
  .get(contributionController.findById)
module.exports = router;
