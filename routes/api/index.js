const router = require("express").Router();
const projectRoutes = require("./project");
const userRoutes = require("./user");

// project routes
router.use("/projects", projectRoutes);

// user routes
router.use("/users", userRoutes);

module.exports = router;
