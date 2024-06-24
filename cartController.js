const express = require('express');
const router = express.Router();
const moment = require('moment'); 
const Cart = require('../models/cartModel'); // Adjust the import to match your model file
const Product = require('../models/productModel'); // Assuming you have a product model
const userModel = require('../models/userModel');


// Create a new cart for a user
const createCart = async (req, res) => {
  try {
    const { cartId, userId } = req.body;
    const newCart = new Cart({
      cartId: cartId,
      user: userId,
      status: 'active',
      products: [],
      quantity: 0,
      price: 0,
    });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Add a product to the cart
const addProductToCart = async (req, res) => {
  try {
    const { cartId, productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const cart = await Cart.findOneAndUpdate(
      { cartId: cartId },
      {
        $push: {
          products: product,
        },
        $inc: {
          quantity: quantity,
          price: product.price * quantity,
        },
      },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get cart by ID
const getCartById = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cart = await Cart.findOne({ cartId: cartId }).populate('user').populate('products');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Remove product from cart
const removeProductFromCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const productId = req.params.productId;

    const cart = await Cart.findOne({ cartId: cartId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(prod => prod._id == productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    const product = cart.products[productIndex];
    cart.products.splice(productIndex, 1);
    cart.quantity -= product.quantity;
    cart.price -= product.price * product.quantity;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update product quantity in cart
const updateProductQuantityInCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const productId = req.params.productId;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ cartId: cartId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const product = cart.products.find(prod => prod._id == productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    const oldQuantity = product.quantity;
    const oldPrice = product.price;

    product.quantity = quantity;
    product.price = product.price * (quantity / oldQuantity);

    cart.quantity += (quantity - oldQuantity);
    cart.price += (product.price - oldPrice);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Empty cart (remove all products)
const emptyCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;

    const cart = await Cart.findOne({ cartId: cartId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Reset products array, quantity, and price
    cart.products = [];
    cart.quantity = 0;
    cart.price = 0;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createCart,
  addProductToCart,
  getCartById,
  removeProductFromCart,
  updateProductQuantityInCart,
  emptyCart,
};