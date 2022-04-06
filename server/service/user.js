const User = require("../models/User");

const findUsers = () => {
	return User.find();
};

const findUserByProperty = (key, value) => {
	if (key === "_id") {
		return User.findById(value);
	}
	return User.findOne({ [key]: value });
};

const createUser = ({ displayName, email, status }) => {
	const user = new User({
		displayName,
		email,
		status,
	});

	return user.save();
};

module.exports = {
	findUserByProperty,
	findUsers,
	createUser,
};
