const express = require('express');
const router = express.Router();
const User = require('../modals/User');
const bcrypt = require('bcryptjs');

router.use(express.json());

// Signup endpoint
router.post('/signup', async (req, res) => {
    try {
        const { cnic, password, name, type, status } = req.body;

        const existingUser = await User.findOne({ cnic });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const newUser = new User({ cnic, password, name, type, status });
        console.log(newUser)
        
        await newUser.save();

        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Could not create user');
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    try {
        const { cnic, password } = req.body;

        const user = await User.findOne({ cnic, status: 'active' });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send('Invalid credentials');
        }

        const token = user.generateAuthToken();
        const userWithToken = { ...user.toObject(), token };

res.send(userWithToken);
    } catch (error) {
        res.status(500).send('Login failed');
    }
});

module.exports = router;
