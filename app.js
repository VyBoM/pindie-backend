const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const connectToDatabase = require("./database/connect");
const cors = require("./middlewars/cors");
const apiRouter = require("./routes/api");

const PORT = 3000;

const app = express();
connectToDatabase();

app.use(cors, bodyParser.json(), express.static(path.join(__dirname, "public")), apiRouter);

app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`);
});
