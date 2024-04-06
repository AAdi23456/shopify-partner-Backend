
const express = require('express');
const router = express.Router();


const  cancelOrder = require('./controller');


router.post('/', cancelOrder);

module.exports = router;
