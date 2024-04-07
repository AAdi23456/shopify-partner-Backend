const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../../../logger');
require('dotenv').config();

const Name = process.env.SHOPIFY_SHOP_NAME;
const key = process.env.SHOPIFY_API_KEY;
const passKey = process.env.SHOPIFY_PASSWORD;

router.get('/', async (req, res) => {
  const { phoneNumber } = req.query;

  if (!phoneNumber || phoneNumber.length!==10) {
    logger.error('Phone number is required or not valid phone number');
    return res.status(400).json({ error: 'Phone number is required or not valid phone number' });
  }
  try {
    const shopify = new Shopify({
      shopName: Name,
      apiKey: key,
      password: passKey,
    });


    const searchResult = await shopify.customer.search({ query: phoneNumber });

    if (searchResult.length === 0) {
      return res.status(400).json({ error: 'Customer not found' });

    }

    const customerId = searchResult[0].id;


    const addresses = await shopify.customerAddress.list(customerId);

    logger.info(`Fetched addresses for customer with phone number ${phoneNumber}`);
    res.json(addresses);
  } catch (error) {
    logger.error(`Error occurred in fetching customer addresses: ${error.message}`);
    console.error('Error occurred in fetching customer addresses:', error);
    if (error.statusCode === 404) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
