const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  createSubCategory,
  getSubCategories,
} = require('../controllers/category.controller');

router.post('/', createCategory);
router.get('/', getCategories);

router.post('/sub', createSubCategory);
router.get('/sub', getSubCategories);

module.exports = router;