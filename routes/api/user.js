const router = require("express").Router();

const userController = require("../../controllers/userController")


// not sure if this is right for api/user
router.route("/")
.post(userController.create);

