const { model, Schema } = require("mongoose");

const eventSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 8,
			maxlength: 100,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
			minlength: 20,
		},
		date: {
			type: Date,
			require: true,
		},
		seat: {
			type: Number,
			require: true,
			default: 0,
		},
		status: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

const Event = model("Event", eventSchema);
module.exports = Event;
