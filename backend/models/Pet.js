const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  stats: { hunger: Number, happiness: Number },
});

module.exports = mongoose.model('Pet', petSchema);
