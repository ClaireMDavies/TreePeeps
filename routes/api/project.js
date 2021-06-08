const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/project/:id"
router
  .route("/project/:id")
  .get(projectController.findById)
//   .put(projectController.update)
//   .delete(projectController.remove);
router
  .route("/location")
  // .route("/location?lat=/:lat+lng=/:lng")
  // .route("/location/lat=/:lat")

  .get(projectController.findByLocation)

module.exports = router;
