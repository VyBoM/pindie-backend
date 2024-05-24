const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewars/auth");

const {
	sendGameCreated,
	sendAllGames,
	sendGameUpdated,
	sendGameDeleted,
	sendGameById
} = require("../controllers/games");

const {
	findAllGames,
	findGameById,
	createGame,
	updateGame,
	deleteGame,
	checkEmptyFields,
	checkIfUsersAreSafe,
	checkIfCategoriesAvaliable,
	checkIsGameExists,
	checkIsVoteRequest
} = require("../middlewars/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
	"/games",
	findAllGames,
	checkIsGameExists,
	checkIfCategoriesAvaliable,
	checkEmptyFields,
	checkAuth,
	createGame,
	sendGameCreated
);
gamesRouter.put(
	"/games/:id",
	findGameById,
	checkIsVoteRequest,
	checkIfUsersAreSafe,
	checkIfCategoriesAvaliable,
	checkEmptyFields,
	checkAuth,
	updateGame,
	sendGameUpdated
);

gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
