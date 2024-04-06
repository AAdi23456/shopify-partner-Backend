const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../../../logger'); 
require('dotenv').config();

const Name = process.env.SHOPIFY_SHOP_NAME;
const key = process.env.SHOPIFY_API_KEY;
const passKey = process.env.SHOPIFY_PASSWORD;

router.put('/', async (req, res) => {
  const { customerId, addressId, addressData } = req.body;

  if (!customerId || !addressId || !addressData) {
    logger.error('Missing required fields');
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const shopify = new Shopify({
      shopName: Name,
      apiKey: key,
      password: passKey,
    });

    const updatedAddress = await shopify.customerAddress.update(customerId, addressId, addressData);

    logger.info(`Address updated successfully for customerId: ${customerId}, addressId: ${addressId}`);
    res.json(updatedAddress);
  } catch (error) {
    logger.error(`Error occurred in updating address: ${error.message}`);
    console.error('Error occurred in updating address:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
