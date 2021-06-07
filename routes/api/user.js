const router = require("express").Router();
const userController = require("../../controllers/userController");

router.head("/:username", userController.usernameExists);

router.get("/:id", userController.findById);

router.post("/", userController.create);



module.exports = router;