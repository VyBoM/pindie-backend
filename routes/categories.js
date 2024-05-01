const sendAllCategories = require("../controllers/categories");
const findAllCategories = require("../middlewars/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

module.exports = categoriesRouter;
