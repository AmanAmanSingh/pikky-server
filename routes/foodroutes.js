const express = require('express');
const router = express.Router();
const { getFoodDetails } = require('../controllers/foodController');

router.get('/food-list', getFoodDetails);


module.exports = router;
