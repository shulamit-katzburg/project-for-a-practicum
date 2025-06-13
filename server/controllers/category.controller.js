const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await prisma.category.create({ data: { name } });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create category' });
    }
};

exports.getCategories = async (req, res) => {
    const categories = await prisma.category.findMany({ include: { subCategories: true } });
    res.json(categories);
};

exports.createSubCategory = async (req, res) => {
    const { name, categoryId } = req.body;
    try {
        const sub = await prisma.subCategory.create({
            data: { name, categoryId },
        });
        res.status(201).json(sub);
    } catch (error) {
            res.status(500).json({ error: 'Failed to create sub-category' });
    }
};

exports.getSubCategories = async (req, res) => {
    const subs = await prisma.subCategory.findMany({ include: { category: true } });
    res.json(subs);
};

// מחזיר את כל התתי קטגוריות של קטגוריה מסוימת
exports.getSubCategoriesByCategoryId = async (req, res) => {
    const categoryId = Number(req.params.categoryId);
    try {
        const subs = await prisma.subCategory.findMany({
            where: { categoryId },
        });
        res.json(subs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sub-categories by category' });
    }
};