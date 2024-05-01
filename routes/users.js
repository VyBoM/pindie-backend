const sendAllUsers = require("../controllers/users");
const findAllUsers = require("../middlewars/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);

module.exports = usersRouter;
