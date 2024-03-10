const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/signup.html'));
});

router.post('/users/signup', userController.createUser); 

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.post('/users/login', userController.loginUser);

module.exports = router;
