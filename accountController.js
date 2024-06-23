const userModel = require('../models/userModel');
const domainName= '3vk5q7h7-8080.uks1.devtunnels.ms';
const express = require('express');
const router = express.Router();
const moment = require('moment'); 


// check if user is logged in
exports.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  };
  //get account details
  exports.getAccountDetails = async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.render('account', { user });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
