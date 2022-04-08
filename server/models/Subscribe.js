const { model, Schema } = require("mongoose");

const subscribeSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
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
