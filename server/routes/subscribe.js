const router = require("express").Router();
const subscribeController = require("../controller/subscribe");

/**
 * Get subscribe by id or email
 * @method GET
 * @visibility Private
 */
router.get("/:subscribeId", subscribeController.getSubscribeByID);

/**
 * Update subscribe by id
 * @method PATCH
 * @visibility Private
 */
router.patch("/:subscribeId", subscribeController.patchSubscribeById);

/**
 * Delete subscribe by id
 * @method DELETE
 * @visibility Private
 */
router.delete("/:subscribeId", subscribeController.deleteSubscribeById);

/**
 * Get all subscribe
 * @method GET
 * @visibility Private
 */
router.get("/", subscribeController.getSubscribes);

/**
 * Post subscribe
 * @method POST
 * @visibility Private
 */
router.post("/", subscribeController.postSubscribe);

module.exports = router;
