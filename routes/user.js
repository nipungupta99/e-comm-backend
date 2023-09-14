const express = require('express');
const User = require("../models/userSchema");
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/signup', UserController.signup);
router.post('/login',UserController.login);
router.post('/profile',UserController.getUserProfile);
router.put('/profile', UserController.updateUser)


module.exports = router;