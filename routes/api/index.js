const router = require("express").Router();
const userRoutes = require("./user");
const projectRoutes = require("./project");

//user routes
router.use("/users", userRoutes);

//project routes
router.use("/projects", projectRoutes);

module.exports = router;
