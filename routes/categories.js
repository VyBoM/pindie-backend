const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewars/auth");

const {
	sendCategoryCreated,
	sendCategoryById,
	sendAllCategories,
	sendCategoryUpdated,
	sendCategoryDeleted,
} = require("../controllers/categories");
const {
	findAllCategories,
	findCategoryById,
	createCategory,
	updateCategory,
	checkEmptyName,
	deleteCategory,
	checkIsCategoryExists,
} = require("../middlewars/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
	"/categories",
	findAllCategories,
	checkIsCategoryExists,
	checkEmptyName,
	checkAuth,
	createCategory,
	sendCategoryCreated
);
categoriesRouter.put(
	"/categories/:id",
	checkEmptyName,
	checkAuth,
	updateCategory,
	sendCategoryUpdated
);
categoriesRouter.delete(
	"/categories/:id",
	checkAuth,
	deleteCategory,
	sendCategoryDeleted
);

module.exports = categoriesRouter;
