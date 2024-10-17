const characters = require('../models/characterModel');

const getAllCharacters = (req, res) => {
  res.json(characters);
};

module.exports = {
  getAllCharacters
};