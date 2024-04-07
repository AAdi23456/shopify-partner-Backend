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
      logger.error('Phone number not found');
      return res.status(404).json({ error: 'Coustomer`s phone number doesnt exist' });
    }

    const orders = await shopify.order.list({ customer_id: searchResult[0].id });
    if (orders.length === 0) {
      logger.info(`Unable to fetch orders for phone number: ${phoneNumber}`);
      return res.status(404).json({ error: "Orders not found" })
    }

    logger.info(`Fetched orders for phone number: ${phoneNumber}`);
    res.json(orders);
  } catch (error) {
    logger.error(`Error occurred in fetching orders: ${error.message}`);
    console.error('Error occurred in fetching orders:', error);
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

module.exports = router;
