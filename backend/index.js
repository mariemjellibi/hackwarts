require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const petRoutes = require('./routes/petRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/pets', petRoutes);
app.use('/api/lessons', lessonRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected successfully"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
