require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MONGODB_URL } = require("./utils");
const connectDB = require("./db");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
	console.log(err);
	const message = err.message ? err.message : "Server Error Occurred";
	const status = err.status ? err.status : 500;

	res.status(status).json({
		message,
	});
});

const port = process.env.PORT || 8000;

connectDB(`${MONGODB_URL}`)
	.then(() => {
		console.log("Database Connected");
		app.listen(port, () => {
			console.log(`I am listening on port ${port}`);
		});
	})
	.catch((e) => console.log(e));
