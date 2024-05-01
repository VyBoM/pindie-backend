const game = require("../models/game")

const findALLGames = async (req, res, next) => {
    req.gamesArray = await game.find({});
    next();
}

module.exports = findALLGames;