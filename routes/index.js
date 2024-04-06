

const express = require('express');
const router = express.Router();


const addressesRoute = require('../app/api/addresses/route');
const updateAddressRoute = require('../app/api/update/route');
const ordersRoute = require('../app/api/orders/route');
const orderRoute = require('../app/api/order/route');
const cancelOrderRoute = require('../app/api/order/cancel/route');


router.use('/app/api/addresses', addressesRoute);
router.use('/app/api/address/update', updateAddressRoute);
router.use('/app/api/orders', ordersRoute);
router.use('/app/api/order', orderRoute);
router.use('/app/api/order/cancel', cancelOrderRoute);

module.exports = router;
