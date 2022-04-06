const { model, Schema } = require("mongoose");

const subscribeSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		event: {
			type: Schema.Types.ObjectId,
			ref: "Event",
		},
		status: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Subscribe = model("Subscribe", subscribeSchema);
module.exports = Subscribe;
