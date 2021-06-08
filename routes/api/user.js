const router = require("express").Router();
const userController = require("../../controllers/userController");

router.head("/:username", userController.usernameExists);

router.get("/:id", userController.findById);

//Matches with "/api/users"
router.route("/")
 .get(userController.findAll)
 .post(userController.create);

// Matches with "/api/user/:id"
router
 .route("/:id")
 .get(userController.findById)
 .put(userController.update)
 .delete(userController.remove);

module.exports = router;



