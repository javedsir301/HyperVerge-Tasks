const express = require('express');
const router = express.Router();
const { createBooking, getUserBookings, getBooking, updateBooking, cancelBooking } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createBooking);
router.get('/', authMiddleware, getUserBookings);
router.get('/:booking_id', authMiddleware, getBooking);
router.put('/:booking_id', authMiddleware, updateBooking);
router.delete('/:booking_id', authMiddleware, cancelBooking);

module.exports = router;
