const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewars/auth");


const {
	sendCategoryCreated,
	sendAllCategories,
	sendCategoryUpdated,
	sendCategoryDeleted
} = require("../controllers/categories");
const {
	findAllCategories,
	createCategory,
	updateCategory,
	checkEmptyName,
	deleteCategory,
    checkIsCategoryExists
} = require("../middlewars/categories");


categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCategoryCreated);
categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
