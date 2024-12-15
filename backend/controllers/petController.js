const User = require('../models/User');

exports.feedPet = async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await User.findById(userId);
    user.pet.lastFed = new Date();
    await user.save();
    res.json({ message: 'Pet has been fed', pet: user.pet });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
