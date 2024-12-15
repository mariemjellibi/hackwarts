const express = require('express');
const { feedPet } = require('../controllers/petController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/feed', authMiddleware, feedPet);

module.exports = router;
