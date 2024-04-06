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

  if (!phoneNumber) {
    logger.error('Phone number is required');
    return res.status(400).json({ error: 'Phone number is required' });
  }

  try {
    const shopify = new Shopify({
      shopName: Name,
      apiKey: key,
      password: passKey,
    });

    const customers = await shopify.customer.list({ query: { phone: phoneNumber } });

    if (customers.length === 0) {
      logger.error('Customer not found');
      throw new Error('Customer not found');
    }

    const customerId = customers[0].id;

    const addresses = await shopify.customerAddress.list(customerId);

    logger.info(`Fetched addresses for customer with phone number ${phoneNumber}`);
    res.json(addresses);
  } catch (error) {
    logger.error(`Error occurred in fetching customer addresses: ${error.message}`);
    console.error('Error occurred in fetching customer addresses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
