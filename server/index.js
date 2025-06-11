const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client');

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.use('/api/users', require('./routes/user.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/prompts', require('./routes/prompt.routes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});