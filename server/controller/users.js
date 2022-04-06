const userService = require("../service/user");
const error = require("../utils/error");

const getUsers = async (req, res, next) => {
	try {
		const data = await userService.findUsers();
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const getUserByID = async (req, res, next) => {
	const { userId } = req.params;

	try {
		const user = await userService.findUserByProperty("_id", userId);

		if (!user) throw error("User not found!", 404);

		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};

const patchUserById = async (req, res, next) => {
	const { userId } = req.params;
	const { name: admin } = req.body;

	try {
		const user = await userService.findUserByProperty("_id", userId);

		if (!user) {
			throw error("User not found", 404);
		}

		user.name = admin ?? user.admin;
		await user.save();

		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};

const deleteUserById = async (req, res, next) => {
	const { userId } = req.params;

	try {
		const user = await userService.findUserByProperty("_id", userId);

		if (!user) {
			throw error("User not found", 404);
		}

		await user.remove();
		return res.status(203).send();
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getUsers,
	getUserByID,
	patchUserById,
	deleteUserById,
};
