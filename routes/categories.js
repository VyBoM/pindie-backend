const { sendCategoryCreated, sendAllCategories } = require("../controllers/categories");
const { findAllCategories, createCategory } = require("../middlewars/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);

module.exports = categoriesRouter;
