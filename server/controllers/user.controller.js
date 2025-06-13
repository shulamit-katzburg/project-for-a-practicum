const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
     const { name, phone } = req.body;

  try {
    // בדיקה אם המשתמש כבר קיים
    let user = await prisma.user.findUnique({
      where: { phone },
    });

    if (!user) {
      // אם לא קיים - צור חדש
      user = await prisma.user.create({
        data: { name, phone },
      });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create or find user" });
  }
};

exports.getUser = async (req, res) => {
    const users = await prisma.user.findMany(); // או כל פעולה אחרת
  res.json(users);
};