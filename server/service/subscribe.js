const Subscribe = require("../models/Subscribe");

const findSubscribes = () => {
	return Subscribe.find().populate("event");
};

const findSubscribeByProperty = (key, value) => {
	if (key === "_id") {
		return Subscribe.findById(value).populate("event");
	}
	return Subscribe.findOne({ [key]: value })
		.populate("user")
		.populate("event");
};

const createSubscribe = ({ name, email, event, status }) => {
	const sub = new Subscribe({
		name,
		email,
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
