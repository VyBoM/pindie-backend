const user = require("../models/user");

const findAllUsers = async (req, res, next) => {
	console.log("GET /users");
	req.usersArray = await user.find({});
	next();
};

const findUserById = async (req, res, next) => {
	try {
		req.user = await users.findById(req.params.id);
		next();
	} catch (err) {
		res.status(404).send({ message: "User not found" });
	}
};

const createUser = async (req, res, next) => {
	try {
		req.user = await users.create(req.body);
		next();
	} catch (err) {
		res.status(400).send({ message: "Error creating user" });
	}
};

module.exports = { findAllUsers, findUserById, createUser };
