const { sendAllUsers, sendUserUpdated, sendUserCreated, sendUserDeleted, sendMe } = require("../controllers/users");
const { checkAuth } = require("../middlewars/auth");
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
	checkAuth,
	hashPassword,
	createUser,
	sendUserCreated
);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
