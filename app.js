const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const connectToDatabase = require("./database/connect");
const cors = require("./middlewars/cors");
const apiRouter = require("./routes/api");
const pagesRouter = require("./routes/pages");

const PORT = 3001;

const app = express();
connectToDatabase();

app.use(
	cors,
	cookieParser(),
	bodyParser.json(),
	pagesRouter,
	apiRouter,
	express.static(path.join(__dirname, "public"))
);

app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`);
});
