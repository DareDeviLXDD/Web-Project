const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const userModel=require('../models/userModel');
const orderModel=require('../models/orderModel');

// Importing necessary models or modules
const domainName = '3vk5q7h7-8080.uks1.devtunnels.mss'; // Example domain name
const moment = require('moment'); // For date formatting

// GET request to fetch account data
router.get('/account/:userId', accountController.getAccount);

// POST request to update username
router.post('/account/update-username/:userId', accountController.updateUsername);

// POST request to update password
router.post('/account/update-password/:userId', accountController.updatePassword);

router.get('/account/order-history/:userId', accountController.getOrderHistory);

module.exports = router;
