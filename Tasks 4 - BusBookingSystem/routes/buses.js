const express = require('express');
const router = express.Router();
const { addBus, getAllBuses, getBus, updateBus, deleteBus } = require('../controllers/busController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addBus);
router.get('/', getAllBuses);
router.get('/:bus_id', getBus);
router.put('/:bus_id', authMiddleware, updateBus);
router.delete('/:bus_id', authMiddleware, deleteBus);

module.exports = router;
