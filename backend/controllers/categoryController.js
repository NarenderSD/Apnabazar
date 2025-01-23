const Category = require('../models/Category');

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new category
const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = new Category({ name });
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCategories, createCategory };
