const { sendCategoryCreated, sendAllCategories, sendCategoryUpdated } = require("../controllers/categories");
const { findAllCategories, createCategory, updateCategory, checkEmptyName } = require("../middlewars/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", checkEmptyName, findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.get("/categories/:id", checkEmptyName, updateCategory, sendCategoryUpdated);

module.exports = categoriesRouter;
