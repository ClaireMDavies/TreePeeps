const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.head("/:username", userController.usernameExists);
router.get("/", userController.findAll);
router.get("/user/:id", userController.findById);
router.post("/", userController.create);
router.post("/login", userController.login);
router.put(userController.update);
router.delete(userController.remove);

module.exports = router;