const sendAllGames = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify({ message: "Игра обновлена" }));
};

module.exports = { sendAllGames, sendGameCreated, sendGameUpdated };
