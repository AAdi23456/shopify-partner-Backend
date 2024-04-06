
const express = require('express');
const router = express.Router();


const  getListOfSavedAddresses = require('./controller');


router.get('/', getListOfSavedAddresses);

module.exports = router;
