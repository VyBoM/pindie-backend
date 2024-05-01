const sendAllGames = require("../controllers/games");
const findALLGames = require("../middlewars/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findALLGames, sendAllGames);

module.exports = gamesRouter;
