const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Makes title required
    trim: true,     // Removes extra spaces
  },
  content: {
    type: String,
    required: true, // Makes content required
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false, // Default value is false
  },
  createdAt: {
    type: Date,
    default: Date.now, // Auto-sets the current date
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
