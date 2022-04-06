const { model, Schema } = require("mongoose");

const userSchema = new Schema(
	{
		displayName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		admin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
