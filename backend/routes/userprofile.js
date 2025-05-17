const express = require('express');
const router = express.Router();
const User = require('../modals/User');

// View User Profile
router.get('/profile/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findOne({ cnic: userId});
    console.log(user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

// Get All Users
router.get('/get', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});


// Update User by CNIC
router.put('/update/:cnic', async (req, res) => {
  try {
    const cnic = req.params.cnic;
    const updatedData = req.body;

    const user = await User.findOneAndUpdate(
      { cnic: cnic },
      { $set: updatedData },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { password, ...updatedUserData } = user._doc;
    res.status(200).json({ message: 'User profile updated', user: updatedUserData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user profile' });
  }
});


module.exports = router;
