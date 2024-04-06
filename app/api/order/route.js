

const express = require('express');
const router = express.Router();


const  getOrderDetails  = require('./controller');


router.get('/', getOrderDetails);

module.exports = router;
