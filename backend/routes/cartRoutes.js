const express = require('express');
const {
  getCart,
  addToCart,
  removeFromCart,
  updateCartItem,
  clearCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get user's cart
router.get('/', protect, getCart);

// Add item to cart
router.post('/', protect, addToCart);

// Update cart item quantity
router.put('/:itemId', protect, updateCartItem);

// Remove an item from the cart
router.delete('/:itemId', protect, removeFromCart);

// Clear entire cart
router.delete('/', protect, clearCart);

module.exports = router;
