const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, enum: ['wedding', 'concert', 'street'], required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Photo', photoSchema);
