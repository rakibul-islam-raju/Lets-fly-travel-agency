const router = require("express").Router();
const userRoutes = require("./users");
// const authenticate = require("../middleware/authenticate");

router.use("/api/v1/users", userRoutes);

module.exports = router;
