const router = require("express").Router();
const userRoutes = require("./user");
const projectRoutes = require("./project");
const contributionRoutes = require("./contribution");

//user routes
router.use("/users", userRoutes);

//project routes
router.use("/projects", projectRoutes);

//contribution routes
router.use("/contribution", contributionRoutes);

module.exports = router;
