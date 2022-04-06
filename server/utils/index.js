require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dafwp.mongodb.net/traveller?retryWrites=true&w=majority`;

module.exports = {
	JWT_SECRET_KEY,
	MONGODB_URL,
};
