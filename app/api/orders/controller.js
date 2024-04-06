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

    const orders = await shopify.order.list({ customer_phone: phoneNumber });

    logger.info(`Fetched orders for phone number: ${phoneNumber}`);
    res.json(orders);
  } catch (error) {
    logger.error(`Error occurred in fetching orders: ${error.message}`);
    console.error('Error occurred in fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
