const router = require("express").Router();
const userController = require("../controller/users");

/**
 * Get user by id or email
 * @method GET
 * @visibility Private
 */
router.get("/:userId", userController.getUserByID);

/**
 * Update user by id
 * @method PATCH
 * @visibility Private
 */
router.patch("/:userId", userController.patchUserById);

/**
 * Delete user by id
 * @method DELETE
 * @visibility Private
 */
router.delete("/:userId", userController.deleteUserById);

/**
 * Get all users
 * @method GET
 * @visibility Private
 */
router.get("/", userController.getUsers);

/**
 * Post user
 * @method POST
 * @visibility Private
 */
router.post("/", userController.postUser);

module.exports = router;
