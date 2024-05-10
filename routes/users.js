const { sendAllUsers } = require("../controllers/users");
const { findAllUsers, createUser } = require("../middlewars/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, createUser)

module.exports = usersRouter;
