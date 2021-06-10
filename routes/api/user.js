const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.head("/:username", userController.usernameExists);
router.get("/", userController.findAll);
router.get("/contributors/:ids", userController.findAllById);
router.get("/user/:id", userController.findById);
router.post("/", userController.create);
// router.get("/contributors", userController.findManyById);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

//router.put(userController.update);
//router.delete(userController.remove);

module.exports = router;