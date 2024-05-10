const { sendAllUsers, sendUserUpdated, sendUserCreated } = require("../controllers/users");
const { findAllUsers, createUser, updateUser, checkEmptyNameAndEmail } = require("../middlewars/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", checkEmptyNameAndEmail, findAllUsers, createUser, sendUserCreated);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUserUpdated);

module.exports = usersRouter;
