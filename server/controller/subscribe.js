const subscribeService = require("../service/subscribe");
const userService = require("../service/user");
const eventService = require("../service/event");
const error = require("../utils/error");

const postSubscribe = async (req, res, next) => {
	const { user, event, status } = req.body;

	try {
		const subscribe = await subscribeService.createSubscribe({
			user,
			event,
			status,
		});
		return res.status(201).json(subscribe);
	} catch (e) {
		next(e);
	}
};

const getSubscribes = async (req, res, next) => {
	try {
		const data = await subscribeService.findSubscribes();
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const getSubscribeByID = async (req, res, next) => {
	const { subscribeId } = req.params;

	try {
		const subs = await subscribeService.findSubscribeByProperty(
			"_id",
			subscribeId
		);

		if (!subs) throw error("Detail not found!", 404);

		return res.status(200).json(subs);
	} catch (e) {
		next(e);
	}
};

const patchSubscribeById = async (req, res, next) => {
	const { subscribeId } = req.params;
	const { status } = req.body;

	try {
		const subs = await subscribeService.findSubscribeByProperty(
			"_id",
			subscribeId
		);

		if (!subs) {
			throw error("User not found", 404);
		}

		subs.status = status ?? subs.status;

		await subs.save();
		return res.status(200).json(subs);
	} catch (e) {
		next(e);
	}
};

const deleteSubscribeById = async (req, res, next) => {
	const { subscribeId } = req.params;

	try {
		const user = await subscribeService.findSubscribeByProperty(
			"_id",
			subscribeId
		);

		if (!user) {
			throw error("Subscription not found", 404);
		}

		await user.remove();
		return res.status(203).send();
	} catch (e) {
		next(e);
	}
};

module.exports = {
	postSubscribe,
	getSubscribes,
	getSubscribeByID,
	patchSubscribeById,
	deleteSubscribeById,
};
