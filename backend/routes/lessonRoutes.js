const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

router.post('/', async (req, res) => {
    try {
      console.log('Request Body:', req.body); // Log incoming data
  
      const { title, content, completed } = req.body;
  
      if (!title || !content) {
        console.log('Validation Failed');
        return res.status(400).json({ message: 'Title and content are required' });
      }
  
      const newLesson = new Lesson({
        title,
        content,
        completed: completed || false,
      });
  
      const savedLesson = await newLesson.save();
      console.log('Lesson Saved:', savedLesson);
  
      res.status(201).json(savedLesson);
    } catch (error) {
      console.error('Error adding lesson:', error.message);
      res.status(500).json({ message: 'Failed to add lesson', error: error.message });
    }
  });
  
module.exports = router;
