const express = require('express');
const mongoose = require('mongoose');
const Expense = require('../models/Expense');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get analytics for different time periods
router.get('/summary/:period', authMiddleware, async (req, res) => {
  try {
    const { period } = req.params; // 'minute', 'hour', 'day', 'week', 'month', 'year'
    const userId = req.userId;

    let groupBy;
    let dateFormat;

    switch (period) {
      case 'minute':
        groupBy = {
          $dateToString: { format: '%Y-%m-%d %H:%M', date: '$date' },
        };
        break;
      case 'hour':
        groupBy = {
          $dateToString: { format: '%Y-%m-%d %H:00', date: '$date' },
        };
        break;
      case 'day':
        groupBy = {
          $dateToString: { format: '%Y-%m-%d', date: '$date' },
        };
        break;
      case 'week':
        groupBy = {
          $dateToString: { format: '%Y-W%V', date: '$date' },
        };
        break;
      case 'month':
        groupBy = {
          $dateToString: { format: '%Y-%m', date: '$date' },
        };
        break;
      case 'year':
        groupBy = {
          $dateToString: { format: '%Y', date: '$date' },
        };
        break;
      default:
        return res.status(400).json({ message: 'Invalid period' });
    }

    const analytics = await Expense.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: groupBy,
          total: { $sum: '$amount' },
          count: { $sum: 1 },
          byCategory: {
            $push: {
              category: '$category',
              amount: '$amount',
            },
          },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(analytics);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get category-wise breakdown
router.get('/categories', authMiddleware, async (req, res) => {
  try {
    const categories = await Expense.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(req.userId) } },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
      { $sort: { total: -1 } },
    ]);

    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get total spending
router.get('/total', authMiddleware, async (req, res) => {
  try {
    const total = await Expense.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(req.userId) } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
          totalExpenses: { $sum: 1 },
        },
      },
    ]);

    res.json(total[0] || { totalAmount: 0, totalExpenses: 0 });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
