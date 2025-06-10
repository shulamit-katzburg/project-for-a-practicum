const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// בהמשך נשלב OpenAI
exports.createPrompt = async (req, res) => {
    const { userId, categoryId, subCategoryId, prompt } = req.body;

    try {
        const response = `Simulated response for: ${prompt}`; // תחליף זמני עד שנשלב OpenAI

        const newPrompt = await prisma.prompt.create({
            data: {
                prompt,
                response,
                userId,
                categoryId,
                subCategoryId,
            },
        });

        res.status(201).json(newPrompt);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create prompt' });
    }
};

exports.getPromptsByUser = async (req, res) => {
    const usetrId = Number(req.params.userId);
    try {
        const prompts = await prisma.prompt.findMany({
            where: { userId },
            include: { category: true, subCategory: true },
        });
        res.json(prompts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch prompts' });
    }
};