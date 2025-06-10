const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
    const { name, phone } = req.body;
    try {
        const user = await prisma.user.create({
            data: { name, phone },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.getUser = async (req, res) => {
    const users = await prisma.user.findMany(); // או כל פעולה אחרת
  res.json(users);
};