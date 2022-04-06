const Subscribe = require("../models/Subscribe");

const findSubscribes = () => {
	return Subscribe.find().populate("user").populate("event");
};

const findSubscribeByProperty = (key, value) => {
	if (key === "_id") {
		return Subscribe.findById(value).populate("user").populate("event");
	}
	return Subscribe.findOne({ [key]: value })
		.populate("user")
		.populate("event");
};

const createSubscribe = ({ user, event, status }) => {
	const sub = new Subscribe({
		user,
		event,
		status,
	});

	return sub.save();
};

module.exports = {
	findSubscribes,
	findSubscribeByProperty,
	createSubscribe,
};
