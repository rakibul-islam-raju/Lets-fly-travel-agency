const router = require("express").Router();
const eventController = require("../controller/events");

/**
 * Get event by id or email
 * @method GET
 * @visibility Private
 */
router.get("/:eventId", eventController.getEventById);

/**
 * Update event by id
 * @method PATCH
 * @visibility Private
 */
router.patch("/:eventId", eventController.patchEventById);

/**
 * Delete event by id
 * @method DELETE
 * @visibility Private
 */
router.delete("/:eventId", eventController.deleteEventById);

/**
 * Get all events
 * @method GET
 * @visibility Private
 */
router.get("/", eventController.getEvents);

/**
 * Post event
 * @method POST
 * @visibility Private
 */
router.post("/", eventController.postEvent);

module.exports = router;
