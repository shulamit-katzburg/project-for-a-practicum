const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { generateLesson } = require('../services/openaiService'); // ← חיבור לשירות

exports.createPrompt = async (req, res) => {
    const { userId, categoryId, subCategoryId, prompt } = req.body;
    console.log("📥 Received prompt:", prompt);

    try {
        const response = await generateLesson(prompt); // ← שימוש ב־OpenAI
        console.log("✅ OpenAI response:", response);

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
        console.error("❌ ERROR in createPrompt:", error); // ← זה מה שחשוב עכשיו
        res.status(500).json({ error: 'Failed to create prompt' });
    }
};

exports.getPromptsByUser = async (req, res) => {
    const userId = Number(req.params.userId);
    try {
        const prompts = await prisma.prompt.findMany({
            where: { userId },
            include: { category: true, subCategory: true },
        });
        res.json(prompts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch prompts' });
    }
};
