const userModel = require('../models/userModel');
const moment = require('moment');
const express = require('express');
const domainName = '3vk5q7h7-8080.uks1.devtunnels.ms';
const router = express.Router();
const orderModel=require('../models/orderModel');


// Function to render account page with user data
const getAccount = async (req, res) => {
  try {
    const users = await User.find(); // Assuming this fetches all users
    res.render('account', { users, moment, domainName });
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching account data: ${err.message}`);
  }
};


// Function to update username
const updateUsername = async (req, res) => {
  const { newUsername } = req.body;
  const userId = req.params.userId;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { username: newUsername },
      { new: true }
    );

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('Username updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating username: ${err.message}`);
  }
};

// Function to update password
const updatePassword = async (req, res) => {
  const { newPassword } = req.body;
  const userId = req.params.userId;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { password: newPassword },
      { new: true }
    );

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('Password updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating password: ${err.message}`);
  }
};
const getOrderHistory = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming you're passing userId in the route params
    const user = await User.findById(userId).populate('orders'); // Assuming orders are referenced in the user model

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.render('account', { users: [user], moment, domainName }); // Passing user object to the account page
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching order history: ${err.message}`);
  }
};



module.exports = {
  getAccount,
  updateUsername,
  updatePassword,
  getOrderHistory,
};
