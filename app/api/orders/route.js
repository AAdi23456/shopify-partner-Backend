
const express = require('express');
const router = express.Router();


const  getOrderList  = require('./controller');


router.get('/', getOrderList);

module.exports = router;
