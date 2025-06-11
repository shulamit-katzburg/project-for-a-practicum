require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateLesson(promptText) {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {role: 'system', content: 'אתה מורה שמעבירה שיעורים קצרים וברורים לפי נושא.'},
                {role: 'user', content: promptText},
            ],
            max_tokens: 500,
            temperature: 0.7,
        });
        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI error:", error);
        throw error;
    }
}

module.exports = { generateLesson };