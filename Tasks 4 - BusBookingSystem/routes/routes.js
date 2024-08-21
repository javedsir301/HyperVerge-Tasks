const express = require('express');
const router = express.Router();
const { addRoute, getAllRoutes, getRoute, updateRoute, deleteRoute } = require('../controllers/routeController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addRoute);
router.get('/', getAllRoutes);
router.get('/:route_id', getRoute);
router.put('/:route_id', authMiddleware, updateRoute);
router.delete('/:route_id', authMiddleware, deleteRoute);

module.exports = router;
