const { sendAllUsers, sendUserUpdated, sendUserCreated, sendUserDeleted } = require("../controllers/users");
const {
	findAllUsers,
	createUser,
	updateUser,
	checkEmptyNameAndEmail,
	deleteUser,
	checkEmptyNameAndEmailAndPassword,
	checkIsUserExists,
	hashPassword
} = require("../middlewars/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
	"/users",
	findAllUsers,
	checkIsUserExists,
	checkEmptyNameAndEmailAndPassword,
	hashPassword,
	createUser,
	sendUserCreated
);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
