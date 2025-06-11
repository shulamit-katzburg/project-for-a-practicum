const express = require('express');
const router = express.Router();

const {
    createPrompt,
    getPromptsByUser,
} = require('../controllers/prompt.controller');

router.post('/', createPrompt);
router.get('/user/:userId', getPromptsByUser);

module.exports = router;