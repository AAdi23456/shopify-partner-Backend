const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../../../logger'); 
require('dotenv').config();

const Name = process.env.SHOPIFY_SHOP_NAME;
const key = process.env.SHOPIFY_API_KEY;
const passKey = process.env.SHOPIFY_PASSWORD;

router.get('/', async (req, res) => {
  const { orderNumber } = req.query;

  if (!orderNumber) {
    logger.error('Order number is required');
    return res.status(400).json({ error: 'Order number is required' });
  }

  try {
    const shopify = new Shopify({
      shopName: Name,
      apiKey: key,
      password: passKey,
    });

    const order = await shopify.order.get(orderNumber);

    if (!order) {
      logger.error('Order not found');
      throw new Error('Order not found');
    }

    logger.info(`Fetched order details for order number: ${orderNumber}`);
    res.json(order);
  } catch (error) {
    logger.error(`Error occurred in fetching order details: ${error.message}`);
    console.error('Error occurred in fetching order details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
