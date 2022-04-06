const eventService = require("../service/event");
const error = require("../utils/error");

const postEvent = async (req, res, next) => {
	const { title, image, description, date, seat, status } = req.body;

	try {
		const user = await eventService.createEvent({
			title,
			image,
			description,
			date,
			seat,
			status,
		});

		return res.status(201).json(user);
	} catch (e) {
		next(e);
	}
};

const getEvents = async (req, res, next) => {
	try {
		const data = await eventService.findEvents();
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const getEventById = async (req, res, next) => {
	const { eventId } = req.params;

	try {
		const event = await eventService.findEventByProperty("_id", eventId);

		if (!event) throw error("Event not found!", 404);

		return res.status(200).json(event);
	} catch (e) {
		next(e);
	}
};

const patchEventById = async (req, res, next) => {
	const { eventId } = req.params;
	const { title, image, description, date, seat, status } = req.body;

	try {
		const event = await eventService.findEventByProperty("_id", eventId);

		if (!event) {
			throw error("Event not found", 404);
		}

		event.title = title ?? event.title;
		event.image = image ?? event.image;
		event.description = description ?? event.description;
		event.date = date ?? event.date;
		event.seat = seat ?? event.seat;
		event.status = status ?? event.status;
		await event.save();

		return res.status(200).json(event);
	} catch (e) {
		next(e);
	}
};

const deleteEventById = async (req, res, next) => {
	const { eventId } = req.params;

	try {
		const event = await eventService.findEventByProperty("_id", eventId);

		if (!event) {
			throw error("Event not found", 404);
		}

		await event.remove();
		return res.status(203).send();
	} catch (e) {
		next(e);
	}
};

module.exports = {
	postEvent,
	getEvents,
	getEventById,
	patchEventById,
	deleteEventById,
};
