const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const cart = require('../controllers/cartController');
const productModel=require('../models/productModel');
const userModel = require('../models/userModel');
const domainName = 'dxx24bpv-8080.uks1.devtunnels.ms';
var moment = require('moment'); //al time stamp handlation wii al format fal ejs
var methodOverride = require('method-override')//dah 3ashn al delete man al database


  // Adds a product to the cart
  router.get('/',cartController.createCart);


  // Adds a product to the cart
  router.get('/',cartController.addProductToCart);


  // Retrieves a cart by its ID
  router.get('/',cartController.getCartById);


  // Removes a product from the cart
  router.get('/',cartController.removeProductFromCart);


  // Updates product quantity in the cart
  router.get('/',cartController.updateProductQuantityInCart);


  // Empties the cart
  router.get('/',cartController.emptyCart);


module.exports = router;
