const allowedCors = ["http://practicum.yandex.ru", "http://students-projects.ru", "localhost:3000"];

function cors(req, res, next) {
	const { origin } = req.headers;

	if (allowedCors.includes(origin)) {
		res.header("Access-Control-Allow-Origin", origin);
	}
	next();
}

module.exports = cors;