const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../../../logger');
require('dotenv').config();

const Name = process.env.SHOPIFY_SHOP_NAME;
const key = process.env.SHOPIFY_API_KEY;
const passKey = process.env.SHOPIFY_PASSWORD;

router.put('/', async (req, res) => {
  try {
    console.log(req.body);
    const {  addressData } = req.body;
    const { addressId } = req.params;

    if (!addressId || !addressData) {
      logger.error('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }
    addressData.default = true

    const shopify = new Shopify({
      shopName: Name,
      apiKey: key,
      password: passKey,
    });
    const searchResult = await shopify.customer.list();


    const customerId = findCustomerIdByAddressId(addressId, searchResult)
    if (!customerId) {
      logger.error(`Error occurred in updating address: this addressId does not exist`);
      res.status(404).json({ error: "This addressId does not exist" });
    }
    const updatedAddress = await shopify.customerAddress.update(customerId, addressId, addressData);

    logger.info(`Address updated successfully for customerId: ${customerId}, addressId: ${addressId}`);
    res.json(updatedAddress);
  } catch (error) {
    logger.error(`Error occurred in updating address: ${error.message}`);
    console.error('Error occurred in updating address:', error);
    res.status(500).json({ error: error.message });
  }
});
function findCustomerIdByAddressId(addressId, customerData) {
  for (const customer of customerData) {
    for (const address of customer.addresses) {
      if (address.id === addressId) {
        return customer.id;
      }
    }
  }
  return null;
}
module.exports = router;
