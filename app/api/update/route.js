

const express = require('express');
const router = express.Router();


const  updateCustomerAddress  = require('./controller');


router.put('/', updateCustomerAddress);

module.exports = router;
