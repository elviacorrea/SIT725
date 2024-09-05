// controllers/userController.js
const { findUser, insertUser } = require('../models/userModel');

const signupUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await findUser(username);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        await insertUser({ username, password });
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up user' });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await findUser(username);
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error during login' });
    }
};

module.exports = { signupUser, loginUser };
