const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const domainName= '3vk5q7h7-8080.uks1.devtunnels.ms';
const userModel=require('../models/userModel');

// Account route
router.get('/account', accountController.ensureAuthenticated, accountController.getAccountDetails);

module.exports = router;

router.get('/', accountController.ensureAuthenticated, accountController.getAccountDetails);

module.exports = router;