const express = require ('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.home);
router.get('/register', mainController.register);
router.get('/login', mainController.login);


module.exports = router;