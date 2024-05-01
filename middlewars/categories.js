const category = require("../models/category");

const findAllCategories = async (req, res, next) => {
	req.categoriesArray = await category.find({});
	next();
};

module.exports = findAllCategories;
