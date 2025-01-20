const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./schemas/userSchema');

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(req.body)

        // Validate inputs
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already in use.' });
        }

        // Hash the password
       // const salt = await bcrypt.genSalt(10);
        // const passwordHash = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password});
        await newUser.save();
        console.log(newUser)

        // Generate a JWT
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User created successfully.', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Check if the password is correct
        const isMatch = password == user.password;
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET , {
            expiresIn: "7d", // You can adjust the expiration time
        });

        // Send the token back to the client
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
