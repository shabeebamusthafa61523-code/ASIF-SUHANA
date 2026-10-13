const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  msg: { type: String, required: true, trim: true },
  time: { type: String },
  likes: { type: Number, default: 0 },
  reply: {
    msg: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
  }
// Index on createdAt descending for ultra-fast query and sorting
wishSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Wish', wishSchema);
