const express = require('express');
const {
  addOrder,
  getOrderById,
  updateOrderToPaid,
  getUserOrders,
  getAllOrders,
  updateOrderToDelivered,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new order
router.post('/', protect, addOrder);

// Get order by ID
router.get('/:id', protect, getOrderById);

// Update order to paid
router.put('/:id/pay', protect, updateOrderToPaid);

// Get logged-in user's orders
router.get('/myorders', protect, getUserOrders);

// Admin-only: Get all orders
router.get('/', protect, admin, getAllOrders);

// Admin-only: Update order to delivered
router.put('/:id/deliver', protect, admin, updateOrderToDelivered);

module.exports = router;
