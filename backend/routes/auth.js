const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Local Signup
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.redirect('/auth/signup.html');  // Redirect back if user exists
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.redirect('/auth/login.html');  // Redirect to login after signup
    } catch (error) {
        console.error(error);
        res.redirect('/auth/signup.html');
    }
});

// Local Login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',      // Redirect to home page after successful login
    failureRedirect: '/auth/login.html'  // Redirect to login page if login fails
}));

module.exports = router;
