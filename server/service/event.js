const Event = require("../models/Event");

const findEvents = () => {
	return Event.find();
};

const findEventByProperty = (key, value) => {
	if (key === "_id") {
		return Event.findById(value);
	}
	return Event.findOne({ [key]: value });
};

const createEvent = ({ title, image, description, date, seat, status }) => {
	const event = new Event({
		title,
		image,
		description,
		date,
		seat,
		status,
	});

	return event.save();
};

module.exports = {
	findEventByProperty,
	findEvents,
	createEvent,
};
