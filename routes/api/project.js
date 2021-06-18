const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);
router
  .route("/location/:lat/:lng/:dist")
  .get(projectController.findByLocation);
  router
  .route("/status/:id")
  .put(projectController.setProjectStatus);
  router
  .route("/contributions/:id")
  .put(projectController.addProjectContribution);
  router
  .route("/contributions/:id/:contributionId")
  .put(projectController.deleteContribution);
router
  .route("/user/:id")
  .get(projectController.findByUserId);
  router
  .route("/usercontributed/:id")
  .get(projectController.findByContributedUserId);

module.exports = router;
