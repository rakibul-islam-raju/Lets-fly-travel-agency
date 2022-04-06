const router = require("express").Router();
const userRoutes = require("./users");
const eventRoutes = require("./events");
// const authenticate = require("../middleware/authenticate");

router.use("/api/v1/users", userRoutes);
router.use("/api/v1/events", eventRoutes);

module.exports = router;
