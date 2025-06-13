const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  createSubCategory,
  getSubCategories,
  getSubCategoriesByCategoryId,
} = require('../controllers/category.controller');

router.post('/', createCategory);
router.get('/', getCategories);

router.post('/sub', createSubCategory);
router.get('/sub', getSubCategories);
router.get('/:categoryId/sub', async (req, res) => {
  const categoryId = Number(req.params.categoryId);
  if (!categoryId) return res.status(400).json({ error: 'Missing categoryId' });
  try {
    const subs = await getSubCategoriesByCategoryId(req, res);
    // הפונקציה תטפל בשליחה
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch subcategories' });
  }
});

module.exports = router;