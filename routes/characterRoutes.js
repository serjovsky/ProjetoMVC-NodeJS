// routes/characterRoutes.js

const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

// GET para listar todos os personagens
router.get('/characters', characterController.getAllCharacters);

module.exports = router;